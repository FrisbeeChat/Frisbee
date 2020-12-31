import { aql } from 'arangojs'
import db from '../connect/db';

export interface Friend {
  username: string;
  first: string;
  last: string;
  avatar: string;
}

interface FriendCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Friend[]): void;
}

interface StCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: string): void;
}

export default {
  getFriends: async (user: {username: string}, callback: FriendCallback) => {
    db.query(`
      let list = (for u in users
        filter u.username == '${user.username}'
        return u.friends)[0]
      for l in list
        for u in users
        filter l == u._key
        return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}
      `)
      .then((cursor: any) => cursor.all())
      .then(
        (result: Friend[]) => callback(null, result),
        (err: Error) => callback(err),
      )
  },

  getUsers: async (callback: FriendCallback) => {
    db.query(
      'for u in users return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar}'
      )
      .then((cursor: any) => cursor.all())
      .then(
        (result: Friend[]) => callback(null, result),
        (err: Error) => callback(err),
      )
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

  getFriendRequests: async (user: {username: string}, callback: FriendCallback) => {
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
          return {"username": u.username}
      `)
      const requests = await requestsBox.all();
      console.log(requests);
      callback(null, requests)
    } catch (err) {
      callback(err);
    }
  },
}


// await db.query(`
//         for u in users
//         let them = (
//           for i in users
//             filter i.username == '${add.them}'
//             return i
//           )[0]
//         filter u.username == '${add.me}'
//         UPDATE u with { friends: APPEND(u.friends, {'_key': them._key, 'pending': true})} IN users
//         `)
//       await db.query(`
//         for u in users
//         let me = (
//           for i in users
//             filter i.username == '${add.me}'
//             return i
//           )[0]
//         filter u.username == '${add.them}'
//         UPDATE u with { friends: APPEND(u.friends, {'_key': me._key, 'pending': true})} IN users
//       `)