import styles from './message.module.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { NextPageContext } from 'next';
import axios from 'axios';
import Router from 'next/router';
import { Sender } from '../context';

const Message = ({messages}: any) => {
  const [text, setText] = useState('');
  const global = useContext(Context);

  function increment() {
    let next = global.currentMessage + 1;
    if (!global.messages[next]) {
      next = 0;
    }
    global.setCurrentMessage(next);
  }

  React.useEffect(() => {
    const sender: Sender = global.messages[global.currentMessage] || global.messages[0];
    if (sender) {
      setText(sender.text);
    }
  }, [global])

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
         <div className={styles.message}>
          {text}
         </div>
        <div className={styles.curl}>
          <div className={styles.curlcontent} onClick={increment} >
            <div className={styles.button} ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;

