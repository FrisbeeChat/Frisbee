import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/UserModel';
import { authorize } from './authMiddleware';
import { User } from '../../database/model/UserModel';

export const getUserData = (req: NextApiRequest, res: NextApiResponse) => {
  model.getUserData(req.cookies.auth, (err: Error | null, results?: User | null) => {
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

export default getUserData;
