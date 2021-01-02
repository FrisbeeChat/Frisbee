import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/AuthModel';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.login(req.body, (err: Error | null, results?: string | null) => {
    if (err) {
      res.status(400).end();
    } else if (results === 'incorrect username or password') {
      res.json({message: results})
    } else  {
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        httpOnly: true,
        maxAge: 3600,
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