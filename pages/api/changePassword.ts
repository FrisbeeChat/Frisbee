import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/AuthModel';
import cookie from 'cookie';
import { authorize } from './authMiddleware';
import { SendObj } from '../../database/model/AuthModel';

const changePassword = (req: NextApiRequest, res: NextApiResponse) => {
  model.changePassword(req.body, (err: Error | string, results: string | null) => {
    if (err) {
      res.status(400).json({message: 'failed password change'});
    } else  {
      console.log('jwt!', results);
      res.setHeader('Set-Cookie', cookie.serialize('auth', results, {
        // maxAge: 20,
        path: '/'
      }))
      res.status(200).end();
    }
  })
};

export const config = {
  api: {
    externalResolver: true,
  },
}

export default authorize(changePassword)