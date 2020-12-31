import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/MessageModel';
import { Message } from '../../database/model/MessageModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.writeMessage(req.body, (err: Error | null, results?: Message[] | null) => {
    if (err) {
      console.log('error');
      res.status(400).end();
    } else {
      res.json(results)
    }
  })
}

export const config = {
  api: {
    externalResolver: true,
  },
}