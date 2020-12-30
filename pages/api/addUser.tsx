import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import model from '../../database/model/model';
import { Friend } from '../../database/model/model';

export default (req: NextApiRequest, res: NextApiResponse) => {
  model.addUser(req.body, (err: Error | null, results?: any[] | null) => {
    if (err) {
      console.log('error');
    } else {
      console.log('rez', results);
      res.json({message: "added user"});
    }
  })
}