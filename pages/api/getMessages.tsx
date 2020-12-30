import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/model';
import { Message } from '../../database/model/model';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getMessages(req.body, (err: Error | null, results?: Message[] | null) => {
    if (err) {
      console.log('error');
    } else {
      res.json(results);
    }
  })
}