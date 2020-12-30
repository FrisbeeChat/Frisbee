import { aql } from 'arangojs'
import db from '../connect/db';

export interface Message {
  username: string;
  first: string;
  last: string;
  avatar: string;
  text: string;
}

export interface Friend {
  username: string;
  first: string;
  last: string;
  avatar: string;
}

interface MessageCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Message[]): void;
}

interface FriendCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Friend[]): void;
}

export default {
  getMessages: async (user: {username: string}, callback: MessageCallback) => {
    db.query(
      `
      let filt = (for m in messages
          for u in users
            filter m.to == u._key
            filter u.username == '${user.username}'
            return {"text": m.text, "from": m.from})
      for u in users
        for f in filt
          filter u._key == f.from
          return {"username": u.username, "first": u.first, "last": u.last, "avatar": u.avatar, "text": f.text}
      `)
      .then((cursor: any) => cursor.all())
      .then(
        (result: Message[]) => callback(null, result),
        (err: Error) => callback(err),
      )
  },

  getFriends: async (user: {username: string}, callback: FriendCallback) => {
    db.query(
      `
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

  addUser: async (add: {me: string, them: string}, callback: FriendCallback) => {
    db.query(
      `
      for u in users
        let them = (
          for i in users
          filter i.username == '${add.them}'
          return i
        )[0]
        filter u.username == '${add.me}'
        UPDATE u with { friends: APPEND(u.friends, them._key)} IN users
      `)
      .then((cursor: any) => cursor.all())
      .then(
        (result: any[]) => callback(null, result),
        (err: Error) => callback(err),
      )
  },
}