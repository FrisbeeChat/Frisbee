import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import { verify } from 'jsonwebtoken';
import token from '../../database/token';


export const authorize = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth, token, async (err, decoded) => {
    try {
      (!err && decoded)
      return await fn(req, res)
    } catch {
      res.status(300).end();
    }

  })
  // return await fn(req, res)
}