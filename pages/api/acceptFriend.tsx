import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.acceptFriend(req.body, (err: Error | null, results?: string | null) => {
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