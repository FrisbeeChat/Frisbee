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

export interface Login {
  username: string;
  password: string;
}

interface StringCallback {
  (err: Error, result?: undefined | null): void;
  (err: undefined | null, result: string): void;
}

export default {
  signup: async (data: Signup, callback: StringCallback) => {
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
              "password": '${hash}'
            } into users
          `);
          const newUserBox = await db.query(`
            for u in users
              filter u.username == '${data.username}'
              return u.username
          `)
          const newUser = await newUserBox.all();
          const claim = {username: newUser[0]};
          const jwt = sign(claim, token);
          callback(null, jwt);
        })
      }
    } catch (err) {
      callback(err);
    }
  },

  login: async (data: Login, callback: StringCallback) => {
    try {
      const passwordBox = await db.query(`
        for u in users
          filter u.username == '${data.username}'
          return u.password
      `)
      const password = await passwordBox.all();
      console.log(password);
      if (password.length === 0) {
        callback(null, 'incorrect username or password')
      } else {
        compare(data.password, password[0], (err: Error, result: boolean) => {
          if (!err && result) {
            const claim = {username: data.username};
            const jwt = sign(claim, token);
            callback(null, jwt);
          } else {
            callback(err, null);
          }
        })
      }
    } catch (err) {
      callback(err);
    }
  },
}