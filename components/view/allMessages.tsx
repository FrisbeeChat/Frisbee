import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { NextPageContext } from 'next';
import axios from 'axios';
import Router from 'next/router';
import Single from './single';
import styles from './view.module.css'
import { Button } from '@material-ui/core';

interface Message {
  avatar: string;
  username: string;
  first: string;
  last: string;
  text: string;
}

const AllMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [sent, setSent] = useState<Message[]>([]);
  const [view, setView] = useState(true);
  const global = useContext(Context);

  React.useEffect(() => {
    console.log(global.messages);
    setMessages(global.messages)
    setSent(global.sent);
  }, [global])

  return (
    <div className={styles.container}>
      <div className={styles.messTop}>
        <div style={{ fontSize: '24px' }}>Messages</div>
        <div>
          <Button variant={view ? 'contained' : 'outlined'} color="primary" onClick={() => setView(true)}>Recieved</Button>
          <Button variant={view ? 'outlined' : 'contained'} color="primary" onClick={() => setView(false)} style={{ marginLeft: '20px' }}>Sent</Button>
        </div>
      </div>
      {
        view ?
          <div>
            {messages.map((item, i) => <Single key={i} message={item} type={true}/>)}
          </div> :
          <div>
            {sent.map((item, i) => <Single key={i} message={item} type={false}/>)}
          </div>
      }
    </div>
  )
}
export default AllMessages;
