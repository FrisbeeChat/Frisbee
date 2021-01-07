import Server from 'socket.io'
import db from '../../database/connect/db';
import model from '../../database/model/MessageModel';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // if (!res.socket.server.io) {
  //   console.log('*First use, starting socket.io')
  //   const io = new Server(res.socket.server)
  // }
}



export default handler;

// import Server from 'socket.io'

// const ioHandler = (req, res) => {
//   if (!res.socket.server.io) {
//     console.log('*First use, starting socket.io')

//     const io = new Server(res.socket.server)

//     io.on('connection', socket => {
//       socket.broadcast.emit('a user connected')
//       socket.on('hello', msg => {
//         socket.emit('hello', 'world!')
//       })
//     })

//     res.socket.server.io = io
//   } else {
//     console.log('socket.io already running')
//   }
//   res.end()
// }

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// export default ioHandler