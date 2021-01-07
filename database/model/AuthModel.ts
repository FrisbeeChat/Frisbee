import { aql } from 'arangojs'
import db from '../connect/db';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import token from '../token';

export interface Signup {
  username: string;
  email: string;
  first: string;
  last: string;
  password: string;
}

export interface SendObj {
  username: string;
  first: string;
  last: string;
  avatar: string;
}

export interface Login {
  username: string;
  password: string;
}

interface StringCallback {
  (err: Error, result?: undefined | null): void;
  (err: string | undefined | null, result: string): void;
}

interface TripleCallback {
  (err: Error, result?: undefined | null, send?: null): void;
  (err: string | undefined | null, result: string, send?: SendObj | null): void;
}

export default {
  signup: async (data: Signup, callback: TripleCallback) => {
    try {
      const checkBox = await db.query(`
        for u in users
          filter u.username == '${data.username}'
          return u
        `);
      const check: any[] = await checkBox.all();
      if (check.length > 0) {
        callback(null, 'existing user');
      } else {
        hash(data.password, 10, async (err: Error, hash: string) => {
          const avatarsBox = await db.query('for a in avatars return a.url');
          const avatars = await avatarsBox.all();
          await db.query(`
            insert {
              "username": '${data.username}',
              "email": '${data.email}',
              "first": '${data.first}',
              "last": '${data.last}',
              "avatar": '${avatars[Math.floor(Math.random() * 10)]}',
              "password": '${hash}',
              "friends": []
            } into users
          `);
          const newUserBox = await db.query(`
            for u in users
              filter u.username == '${data.username}'
              return u
          `)
          const newUser = await newUserBox.all();
          const claim = {username: newUser[0].username};
          const jwt = sign(claim, token);
          const sendObject = {
            username: newUser[0].username,
            first: newUser[0].first,
            last: newUser[0].last,
            avatar: newUser[0].avatar
          };
          callback(null, jwt, sendObject);
        })
      }
    } catch (err) {
      callback(err);
    }
  },

  login: async (data: Login, callback: TripleCallback) => {
    try {
      const userBox = await db.query(`
        for u in users
          filter u.username == '${data.username}'
          return u
      `)
      const user = await userBox.all();
      if (user.length === 0) {
        callback(null, 'incorrect username or password', null)
      } else {
        compare(data.password, user[0].password, (err: Error, result: boolean) => {
          if (!err && result) {
            const claim = {username: data.username};
            const jwt = sign(claim, token);
            const sendObject = {
              username: user[0].username,
              first: user[0].first,
              last: user[0].last,
              avatar: user[0].avatar
            };
            callback(null, jwt, sendObject);
          } else {
            callback('Failed Login', null, null);
          }
        })
      }
    } catch (err) {
      callback(err);
    }
  },

  changePassword: async (data: Login, callback: StringCallback) => {
    try {
      hash(data.password, 10, async (err: Error, hash: string) => {
        const usernameBox = await db.query(`
          let me = (for u in users
            filter u.username == '${data.username}'
            return u._key)
          for u in users
            for m in me
              filter u._key == m
              update {"_key": m, "password": '${hash}'} in users
              LET updated = NEW
              RETURN UNSET(updated, "_key", "password", "friends", "_rev", "_id", "email", "first", "last", "avatar")
          `);
        const username = await usernameBox.all();
        const claim = {username: username[0].username};
        const jwt = sign(claim, token);
        callback(null, jwt);
      })
    } catch (err) {
      callback(err);
    }
  },
}