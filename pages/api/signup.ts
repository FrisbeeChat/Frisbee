import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/AuthModel';
import cookie from 'cookie';
import { SendObj } from '../../database/model/AuthModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.signup(req.body.data, (err: Error | null | string, results: string | null, send?: SendObj | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        // maxAge: 5,
        path: '/'
      }))
      res.json(send);
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}