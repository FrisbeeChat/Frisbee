import type { NextApiRequest, NextApiResponse } from 'next';
import model from '../../database/model/MessageModel';
import { Message } from '../../database/model/MessageModel';
import { authorize } from './authMiddleware';

export const getSentMessages = (req: NextApiRequest, res: NextApiResponse) => {
  model.getSentMessages(req.body, (err: Error | null, results?: Message[] | null) => {
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

export default authorize(getSentMessages);