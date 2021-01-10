import styles from './message.module.css'
import React, { lazy } from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import Router from 'next/router';
import { Sender } from '../context';
import { Paper, Button, Grid, Fab } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const exUsername = 'WELCOME';
const exFirst = 'Add a friend to';
const exLast = 'send cards!';
const exAvatar = 'https://frisbee-images.s3-us-west-1.amazonaws.com/paint.jpg';

const Message = () => {
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
      setText(`Hi ${global.userData.first} ${global.userData.last},
      Welcome to Postcard,
      this is where you will find any messages you may receive.`);
      setAvatar(exAvatar);
      setUsername(exUsername);
      setFirst(exFirst);
      setLast(exLast);
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

  //nav button size based on screen width
  const buttonSize = () => {
    if (first !== '') {
      return window.screen.width < 601 ? "small" : "large"
    }
  }
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-evenly"
      style={{ width: "calc(100% - 10px)" }}
    >
      <Fab
        className={styles.arrowLeft}
        color="primary"
        onClick={decrement}
        size={buttonSize() || "small"}
        role="navigation"
        aria-label="Previous message"
      >
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
                <img
                  className={styles.avatar}
                  alt={`${username}'s profile picture`}
                  src={avatar || exAvatar}
                />
                <div>
                  <div
                  className={styles.username}
                  >@{username || exUsername}</div>
                  <div
                    className={styles.name}
                  >{first || exFirst} {last || exLast}</div>
                </div>
              </div>
              <div className={styles.time || ''}>{time}</div>
            </div>
          </div>
        </div>
      </Paper>
      <Fab
        className={styles.arrowRight}
        color="primary"
        onClick={increment}
        size={buttonSize()|| "small"}
        role="navigation"
        aria-label="Next message"
      >
          <ArrowForwardIosIcon/>
        </Fab>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Button
          variant="contained"
          color="secondary"
          style={{ background: "" }}
          className={styles.button}
          onClick={reply}
          role="navigation"
          aria-label="Reply to current message"
        >
          Reply
        </Button>
      </Grid>
    </Grid>
  )
}
export default Message;

