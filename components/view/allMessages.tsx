import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { NextPageContext } from 'next';
import axios from 'axios';
import Router from 'next/router';
import Single from './single';
import styles from './view.module.css'

interface Message {
  avatar: string;
  username: string;
  first: string;
  last: string;
  text: string;
}

const AllMessages = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const global = useContext(Context);

  React.useEffect(() => {
    console.log(global.messages);
    setMessages(global.messages)
  }, [global])

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: '20px', fontSize: '24px' }}>Messages</div>
      <div>
        {messages.map((item, i) => <Single key={i} message={item}/>)}
      </div>
    </div>
  )
}
export default AllMessages;
