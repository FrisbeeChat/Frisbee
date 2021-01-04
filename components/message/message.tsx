import styles from './message.module.css'

import React, { useContext } from 'react';

import { Context } from '../context';
import { NextPageContext } from 'next';

import axios from 'axios';
import Router from 'next/router';

const Message = ({messages}: any) => {
  const global = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
         <div className={styles.message}>
          { JSON.stringify(global.userData) }
          {messages}
         </div>
        <div className={styles.curl}>
          <div className={styles.curlcontent} onClick={()=>{const next = global.currentMessage + 1 || 0; global.setCurrentMessage(next)}} >
            <div className={styles.button} ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;


Message.getIntialProps = async (ctx:NextPageContext) => {
  const global = useContext(Context)
  const cookie = ctx.req?.headers.cookie;
  const resp = await axios({
    url: 'http://localhost:3000/api/getMessages',
    method: 'get',
    headers: {
      cookie: cookie!,
    },
    data: {
      username: global.userData.username,
    },
  });

  if (resp.status === 401 && !ctx.req) {
    Router.replace('/login');
    return;
  }
  if (resp.status === 401) {
    ctx.res.writeHead(302, {
      location: 'http://localhost.com/login'
    });
    ctx.res.end();
    return;
  }
  console.log('hello from get initial props',resp)
  return {messages: resp}
}