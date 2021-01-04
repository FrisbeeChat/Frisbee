import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/AuthModel';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.signup(req.body.data, (err: Error | null | string, results?: string | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        httpOnly: true,
        // maxAge: 5,
        path: '/'
      }))
      res.json({message: 'signed up'});
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}