import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getFriends(req.body, (err: Error | null, results?: User[] | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.json(results);
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}
