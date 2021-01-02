import { aql } from 'arangojs'
import db from '../connect/db';

export interface Message {
  username: string;
  first: string;
  last: string;
  avatar: string;
  text: string;
}

interface MessageCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: Message[]): void;
}

interface StringCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: string): void;
}

export default {
  getMessages: async (user: {username: string}, callback: MessageCallback) => {
    try {
      const messagesBox = await db.query(`
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
      const messages: Message[] = await messagesBox.all();
      callback(null, messages);
    } catch (err) {
      callback(err);
    }
  },
  writeMessage: async (data: {me: string, them: string, text: string}, callback: StringCallback) => {
    try {
      await db.query(`
        let keys = (for u in users
          let them = (
            for i in users
              filter i.username == '${data.them}'
              return i
            )[0]
          filter u.username == '${data.me}'
          return {from: u._key, to: them._key})[0]
        UPSERT { from: keys.from, to: keys.to }
        INSERT { from: keys.from, to: keys.to, text: '${data.text}' }
        UPDATE { from: keys.from, to: keys.to, text: '${data.text}' } IN messages
        `)
      callback(null, 'created message');
    } catch (err) {
      callback(err);
    }
  },

  deleteMessage: async (users: {me: string, them: string}, callback: StringCallback) => {
    try {
      await db.query(`
        let them = (for u in users
          filter u.username == '${users.them}'
          return u._key)[0]
        for u in users
          for m in messages
            filter u.username == '${users.me}'
            filter m.from == u._key
            filter m.to == them
            remove m in messages
        `)
      callback(null, 'deleted message');
    } catch (err) {
      callback(err);
    }
  },
}
