import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/MessageModel';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.deleteMessage(req.body, (err: Error | null, results?: string | null) => {
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