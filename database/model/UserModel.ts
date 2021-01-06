import { aql } from 'arangojs'
import db from '../connect/db';
import { decode } from 'jsonwebtoken';

export interface User {
  username: string;
  first: string;
  last: string;
  avatar: string;
}

interface UserCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: User[] | User): void;
}

interface StCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: string): void;
}

export default {
  getUserData: async (encrypted: string, callback: UserCallback) => {
    const decoded: any = decode(encrypted);
    try {
      const userDataBox = await db.query(`
        for u in users
          filter u.username == '${decoded.username}'
          return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}
        `)
      const userData: User[] = await userDataBox.all();
      callback(null, userData[0]);
    } catch (err) {
      callback(err);
    }
  },

  getFriends: async (user: {username: string}, callback: UserCallback) => {
    try {
      const friendsBox = await db.query(`
        let list = (for u in users
          filter u.username == '${user.username}'
          return u.friends)[0]
        for l in list
          for u in users
          filter l == u._key
          return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}
        `)
      const friends: User[] = await friendsBox.all();
      callback(null, friends);
    } catch (err) {
      callback(err);
    }
  },

  getUsers: async (callback: UserCallback) => {
    try {
      const usersBox = await db.query(
        'for u in users return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}'
        )
      const users: User[] = await usersBox.all();
      callback(null, users)
    } catch (err) {
      callback(err);
    }
  },

  addUser: async (add: {me: string, them: string}, callback: StCallback) => {
    try {
      await db.query(`
        for u in users
        let them = (
          for i in users
            filter i.username == '${add.them}'
            return i
          )[0]
        filter u.username == '${add.me}'
        insert {from: u._key, to: them._key} into requests
      `)
      callback(null, 'send request')
    } catch (err) {
      callback(err);
    }
  },

  getFriendRequests: async (user: {username: string}, callback: UserCallback) => {
    try {
      const requestsBox = await db.query(`
        let filt = (for u in users
          for r in requests
            filter r.to == u._key
            filter u.username == '${user.username}'
            return {'from': r.from})
        for u in users
          for f in filt
            filter u._key == f.from
            return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}
      `)
      const requests: User[] = await requestsBox.all();
      callback(null, requests)
    } catch (err) {
      callback(err);
    }
  },

  acceptFriend: async (users: {me: string, them: string}, callback: StCallback) => {
    try {
      await db.query(`
        let them = (for u in users
            filter u.username == '${users.them}'
            return u._key)
        for u in users
          for t in them
            filter u.username == '${users.me}'
            UPDATE u with {friends: APPEND(u.friends, t)} IN users
      `);
      await db.query(`
        let them = (for u in users
          filter u.username == '${users.me}'
            return u._key)
        for u in users
          for t in them
            filter u.username == '${users.them}'
            UPDATE u with {friends: APPEND(u.friends, t)} IN users
      `);
      await db.query(`
        let them = (for u in users
            filter u.username == '${users.them}'
            return u._key)
        for r in requests
          for u in users
           for t in them
            filter u.username == '${users.me}'
            filter r.from == t
            remove r in requests
        `);
      callback(null, 'added friend');
    } catch (err) {
      callback(err);
    }
  },

  ignoreRequest: async (users: {me: string, them: string}, callback: StCallback) => {
    try {
      await db.query(`
        let them = (for u in users
            filter u.username == '${users.them}'
            return u._key)
        for r in requests
          for u in users
           for t in them
            filter u.username == '${users.me}'
            filter r.from == t
            remove r in requests
        `);
      callback(null, 'ignored friend request');
    } catch (err) {
      callback(err);
    }
  },

  deleteFriend: async (users: {me: string, them: string}, callback: StCallback) => {
    try {
      await db.query(`
        let them = (for u in users
          filter u.username == '${users.me}'
          return u._key)
        for u in users
          for t in them
            filter u.username == '${users.them}'
            update {"_key": u._key, "friends": REMOVE_VALUE(u.friends, t)} in users
        `);
        await db.query(`
          let them = (for u in users
            filter u.username == '${users.them}'
            return u._key)
          for u in users
            for t in them
              filter u.username == '${users.me}'
              update {"_key": u._key, "friends": REMOVE_VALUE(u.friends, t)} in users
        `);
      callback(null, 'removed friend');
    } catch (err) {
      callback(err);
    }
  },

//   changeSettings: async (data: User, callback: st) => {
//     try {
//       await db.query(``);
//     } catch (err) {
//       callback(err);
//     }
//   }
// }
