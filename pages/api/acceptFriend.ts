import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const acceptFriend = (req: NextApiRequest, res: NextApiResponse) => {
  model.acceptFriend(req.body, (err: Error | null, results?: string | null) => {
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

export default authorize(acceptFriend);
