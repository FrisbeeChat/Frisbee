import styles from './send.module.css'
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context';
import axios from 'axios';
import Router from 'next/router';
import { Paper, Button, Container, Grid } from '@material-ui/core';

const Send: React.FC = () => {
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [avatar, setAvatar] = useState('');
  const [message, setMessage] = useState('');
  const global = useContext(Context);

  React.useEffect(() => {
    setAvatar(global.userData.avatar);
    setUsername(global.userData.username);
    setFirst(global.userData.first);
    setLast(global.userData.last);
  }, [global]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(global.draft)
    await axios({
      url: 'http://localhost:3000/api/writeMessage',
      method: 'post',
      data: {
        me: global.userData.username,
        them: global.draft.username,
        text: message
      },
    });
    Router.replace('/');
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Paper elevation={8} className={styles.messageContainer}>
        <div className={styles.message}>
          <div className={styles.left}>
            <div>
              <button>font 1</button>
              <button>font 2</button>
              <button>font 3</button>
            </div>
            <textarea onChange={(e) => handleChange(e)} className={styles.input} style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} value={message} />
          </div>
          <div className={styles.right}>
            <div className={styles.stamp}>
              stamp
            </div>
            <div className={styles.senderInfo}>
              <img className={styles.avatar} src={avatar} />
              <div>
                <div className={styles.username}>@{username}</div>
                <div className={styles.name}>{first} {last}</div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
      <Button variant="contained" color="secondary" onClick={(e) => sendMessage(e)} className={styles.sendButton}>Send</Button>
    </Grid>
  )
}
export default Send;