import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/model';
import { Friend } from '../../database/model/model';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.getFriends(req.body, (err: Error | null, results?: Friend[] | null) => {
    if (err) {
      console.log('error');
    } else {
      res.json(results);
    }
  })
}