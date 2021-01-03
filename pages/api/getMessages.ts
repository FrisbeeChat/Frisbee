import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
<<<<<<< HEAD:pages/api/getFriends copy.tsx
import model from '../../database/model/UserModel';
import { User } from '../../database/model/UserModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getFriends(req.body, (err: Error | null, results?: User[] | null) => {
=======
import model from '../../database/model/MessageModel';
import { Message } from '../../database/model/MessageModel';
import { authorize } from './authMiddleware';

export const getMessages = (req: NextApiRequest, res: NextApiResponse) => {
  model.getMessages(req.body, (err: Error | null, results?: Message[] | null) => {
>>>>>>> a0229568cfa78dea4e9bd082f0e1d86e91e923b4:pages/api/getMessages.ts
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
<<<<<<< HEAD:pages/api/getFriends copy.tsx
=======

export default authorize(getMessages);
>>>>>>> a0229568cfa78dea4e9bd082f0e1d86e91e923b4:pages/api/getMessages.ts
