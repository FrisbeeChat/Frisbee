import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const getFriends = (req: NextApiRequest, res: NextApiResponse) => {
  model.getFriends(req.body, (err: Error | null, results?: User[] | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.status(200).json(results);
    }
  })
};

export const config = {
  api: {
    externalResolver: true,
  },
}

export default authorize(getFriends);
