import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getFriendRequests(req.body, (err: Error | null, results?: User[] | null) => {
    if (err) {
      console.log('error');
    } else {
      console.log('rez', results);
      res.json(results);
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}