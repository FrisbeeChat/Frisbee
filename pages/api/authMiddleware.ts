import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import db from '../../database/connect/db';
import { verify } from 'jsonwebtoken';
import token from '../../database/token';

export const authorize = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth, token, async (err, decoded) => {
    if (!err && decoded) {
      return await fn(req, res)
    }
    res.status(401).json({message: 'Failed Authentication'});
  })
  // return await fn(req, res)
}