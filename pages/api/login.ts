import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/AuthModel';
import cookie from 'cookie';
import { authorize } from './authMiddleware';

export default (req: NextApiRequest, res: NextApiResponse) => {

  model.login(req.body.data, (err: Error | string | null, results: string | null) => {
    if (err) {
      res.status(400).json({message: 'failed login'});
    } else if (results === 'incorrect username or password') {
      res.json({message: results})
    } else  {
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        httpOnly: true,
        // maxAge: 20,
        path: '/'
      }))
      res.json({message: 'logged in'});
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}
