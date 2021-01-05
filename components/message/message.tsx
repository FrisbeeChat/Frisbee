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
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
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
      setAvatar(sender.avatar);
      setUsername(sender.username);
      setFirst(sender.first);
      setLast(sender.last);
    }
  }, [global])

  return (
    <div className={styles.messageContainer}>
      <div className={styles.message}>
        <div className={styles.left}>{text}</div>

        <div className={styles.right}>
          <div className={styles.stamp}>
            stamp
          </div>
          <div className={styles.senderInfo}>
            <img className={styles.avatar} src={avatar} />
            <div>
              <div className={styles.username}>{username}</div>
              <div className={styles.name}>{first} {last}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.curl}>
        <div className={styles.curlcontent} onClick={increment} >
          <div className={styles.button}></div>
        </div>
      </div>
    </div>
  )
}
export default Message;

