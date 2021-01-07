import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const getSentRequests = (req: NextApiRequest, res: NextApiResponse) => {
  model.getSentRequests(req.body, (err: Error | null, results?: User[] | null) => {
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

export default authorize(getSentRequests);