import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../database/connect/db';
import cookie from 'cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
    maxAge: -1,
    path: '/'
  }))
  res.writeHead(200);
  res.end();
};

export const config = {
  api: {
    externalResolver: true,
  },
}