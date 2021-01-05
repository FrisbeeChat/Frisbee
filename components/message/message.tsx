import styles from './message.module.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { NextPageContext } from 'next';
import axios from 'axios';
import Router from 'next/router';
import { Sender } from '../context';
import { Paper, Button, Container } from '@material-ui/core';

const Message = ({messages}: any) => {
  const [text, setText] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const global = useContext(Context);

  const increment = () => {
    let next = global.currentMessage + 1;
    if (!global.messages[next]) {
      next = 0;
    }
    global.setCurrentMessage(next);
  }

  const reply = () => {
    global.setDraft({username: username, message:"navigated from search comp"});
    Router.replace('/send');
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
    <Container className={styles.container}>
      <Paper elevation={8} className={styles.messageContainer}>
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
        {/* <div className={styles.curl}>
          <div className={styles.curlcontent} onClick={increment} >
            <div className={styles.button}></div>
          </div>
        </div> */}
      </Paper>
      <div>
        <Button variant="contained" color="secondary" className={styles.replyButton} onClick={reply}>Reply</Button>
        <Button variant="contained" color="primary" className={styles.replyButton} onClick={increment}>Next</Button>
      </div>
    </Container>
  )
}
export default Message;

