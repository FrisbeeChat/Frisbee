import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';
import { authorize } from './authMiddleware';

export const changeSettings = (req: NextApiRequest, res: NextApiResponse) => {
  model.changeSettings(req.body, (err: Error | null, results?: User[] | null) => {
    if (err) {
      res.status(400).end();
    } else {
      res.json(results[0]);
    }
  })
};

export const config = {
  api: {
    externalResolver: true,
  },
}

export default authorize(changeSettings);