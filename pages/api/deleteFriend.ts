import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const deleteFriend = (req: NextApiRequest, res: NextApiResponse) => {
  model.deleteFriend(req.body, (err: Error | null, results?: string | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.json(results);
    }
  })
};

export const config = {
  api: {
    externalResolver: true,
  },
}

export default authorize(deleteFriend);
