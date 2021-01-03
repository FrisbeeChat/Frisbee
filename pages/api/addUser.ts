import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const addUser = (req: NextApiRequest, res: NextApiResponse) => {
  model.addUser(req.body, (err: Error | null, results?: string | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.json({message: "added user"});
    }
  })
};

export const config = {
  api: {
    externalResolver: true,
  },
}

export default authorize(addUser);
