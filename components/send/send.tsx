import styles from './send.module.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Context } from '../context';
import axios from 'axios';
import Router from 'next/router';
import { Paper, Button, ButtonGroup, Grid } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';


const Send: React.FC = () => {
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [avatar, setAvatar] = useState('');
  const [message, setMessage] = useState('');
  const [font, setFont] = useState('font1');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const global = useContext(Context);

  React.useEffect(() => {
    if (global.userData.username !== '') {
      setAvatar(global.userData.avatar);
      setUsername(global.userData.username);
      setFirst(global.userData.first);
      setLast(global.userData.last);
    }
    if (global.draft.username === '') {
      Router.replace('/')
    }
  }, [global.refresh]);

  const upload = async (e: any) => {
    const image = e.target.files[0]
    const reader = new FormData()
    reader.append('file', image);
    reader.append('upload_preset', 'postcardcover')
    setLoading(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/postcard/image/upload', {
      method: 'POST',
      body: reader
    })
    const file = await res.json();
    setImage(file.url);
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    // data sanitization
    let text = message.replaceAll('"','\'');
    text = text.replaceAll('\\',' ');

    e.preventDefault();
    const current = new Date().toString().split(' ');
    const currentTime = current[4].split(':');
    const string = `${current[1]} ${current[2]} ${current[3]}, ${currentTime[0]}:${currentTime[1]}`;
    await axios({
      url: `${window.location.origin}/api/writeMessage`,
      method: 'post',
      data: {
        me: global.userData.username,
        them: global.draft.username,
        text,
        photo: image,
        font: font,
        time: string
      },
    });
    global.trigRefresh(true);
    Router.replace('/');
  }

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
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Paper elevation={8} className={styles.messageContainer}>
        <div className={styles.message}>
          <div className={styles.left}>
            <ButtonGroup color="primary" style={{ marginBottom: "6px" }}>
              <button
                style={font === 'font1' ? {background: 'rgb(235, 235, 235)'} : {}}
                className={`${styles.font1} ${styles.font}`}
                onClick={() => setFont('font1')}
              >
                Serif
              </button>
              <button
                style={font === 'font2' ? {background: 'rgb(235, 235, 235)'} : {}}
                className={`${styles.font2} ${styles.font}`}
                onClick={() => setFont('font2')}
              >
                Note
              </button>
              <button
                style={font === 'font3' ? {background: 'rgb(235, 235, 235)'} : {}}
                className={`${styles.font3} ${styles.font}`}
                onClick={() => setFont('font3')}
              >
                Messy
              </button>
              <button
                style={font === 'font4' ? {background: 'rgb(235, 235, 235)'} : {}}
                className={`${styles.font4} ${styles.font}`}
                onClick={() => setFont('font4')}
              >
                Cursive
              </button>
            </ButtonGroup>
            <textarea
              onChange={(e) => handleChange(e)}
              className={`${styles.input} ${selectedFont}`}
              value={message} />
          </div>
          <div className={styles.right}>
            <div className ={styles.topRight}>
              <div className={styles.uploadButton}>
                <input
                  accept="image/png, image/jpg"
                  style={{ display: "none" }}
                  id="upload"
                  type="file"
                  onChange={(e)=>upload(e)}
                  data-cloudinary-field="image_id"
                  data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
                />
                <label htmlFor="upload">
                  <Button
                    variant="outlined"
                    color="primary"
                    component="span"
                  >
                    Upload Photo
                  </Button>
                </label>
              </div>
              <div className={styles.stampContainer}>
                <div className={styles.stamp}>
                  <div className={styles.stampFill}>
                    <MarkunreadMailboxIcon style={{ fontSize: 30 }} />
                  </div>
                </div>
              </div>
            </div>
            <div>
                {image ? <img className={styles.messagePhoto} src={image}/> : <div></div>}
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
      <Button variant="contained" color="secondary" onClick={(e) => sendMessage(e)} className={styles.sendButton}>Send to {global.draft.username}</Button>
    </Grid>
  )
}
export default Send;