import styles from './message.module.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import { NextPageContext } from 'next';
import axios from 'axios';
import Router from 'next/router';
import { Sender } from '../context';
import { Paper, Button, Container, Grid, Fab } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Message = ({messages}: any) => {
  const [text, setText] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [photo, setPhoto] = useState<string | null>('');
  const [font, setFont] = useState<string>('font1');
  const [time, setTime] = useState<string | null>('');
  const global = useContext(Context);

  const increment = () => {
    let next = global.currentMessage + 1;
    if (!global.messages[next]) {
      next = 0;
    }
    global.setCurrentMessage(next);
    console.log(global.messages);
  }

  const decrement = () => {
    let next = global.currentMessage - 1;
    if (next === -1) {
      next = global.messages.length - 1;
    }
    global.setCurrentMessage(next);
  }

  const reply = () => {
    global.setDraft({username: username, message:"navigated from search comp", image: ''});
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
      setPhoto(sender.photo);
      setFont(sender.font);
      setTime(sender.time);
    } else {
      setText('Welcome to Postcard, this is where you will find any messages you may receive\n.',);
      setAvatar('https://frisbee-images.s3-us-west-1.amazonaws.com/paint.jpg');
      setUsername('WELCOME');
      setFirst('Add a friend to',);
      setLast('send cards!');
    }
  }, [global]);

  let selectedFont = styles.font1;
  switch (font) {
    case 'font1':
      selectedFont = styles.font1;
      break;
    case 'font2':
      selectedFont = styles.font2;
      break;
    case 'font3':
      selectedFont = styles.font3;
      break;
    case 'font4':
      selectedFont = styles.font4;
      break;
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      style={{ width: "84vw" }}
    >
      <Fab color="primary" onClick={decrement}>
        <ArrowBackIosIcon />
      </Fab>
      <Paper elevation={8} className={styles.messageContainer}>
        <div className={styles.message}>
          <div className={`${styles.left} ${selectedFont}`}>{text}</div>
          <div className={styles.right}>
            <div className={styles.stamp}>
              <div className={styles.stampFill}>
                <MarkunreadMailboxIcon style={{ fontSize: 30 }} />
              </div>
            </div>
            <div>
              {photo ? <img className={styles.messagePhoto} src={photo}/> : <div></div>}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.senderInfo}>
                <img className={styles.avatar} src={avatar} />
                <div>
                  <div className={styles.username}>@{username}</div>
                  <div className={styles.name}>{first} {last}</div>
                </div>
              </div>
              <div className={styles.time}>{time}</div>
            </div>
          </div>
        </div>
      </Paper>
      <Fab color="primary" onClick={increment}>
          <ArrowForwardIosIcon />
        </Fab>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Button variant="contained" color="secondary" style={{ background: "" }}className={styles.button} onClick={reply}>Reply</Button>
      </Grid>
    </Grid>
  )
}
export default Message;

