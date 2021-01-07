import React from 'react';
import styles from './header.module.css'
import { useContext, useState } from 'react';
import { Context } from '../context'
import { Button, TextField } from '@material-ui/core';
import Router from 'next/router';
import axios from 'axios';

interface Props {
  upload: (arg: string) => void;
  avatar: string;
}

const Settings = ({upload, avatar}: Props) => {
  const global = useContext(Context);

  const [first, setFirst] = useState(global.userData.first);
  const [last, setLast] = useState(global.userData.last);
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [message, setMessage] = useState(false);

  const logout = async () => {
    try {
      await axios({
        url: `${window.location.origin}/api/logout`,
        method: 'get',
      });
      Router.replace('/login');
    } catch (err) {
      Router.replace('/login');
    }
  }

  const changeName = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/changeSettings`,
      method: 'post',
      data: {
        username: global.userData.username,
        first,
        last,
        avatar: global.userData.avatar,
      }
    })
    global.setUserData(resp.data);
    setFirst(resp.data.first);
    setLast(resp.data.last);
  }

  const changePassword = async () => {
    if (passwordCheck === password) {
      await axios({
        url: `${window.location.origin}/api/changePassword`,
        method: 'post',
        data: {
          username: global.userData.username,
          password,
        }
      })
      setMessage(false);
    } else {
      setMessage(true);
      console.log('passwords dont match')
    }
  }

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsLeft}>
        <div>
          <img className={styles.settingsPhoto} src={avatar} />
          <div className={styles.uploadButton}>
            <input
              accept="image/png, image/jpg"
              style={{ display: "none" }}
              id="upload"
              type="file"
              onChange={(e:any) => upload(e)}
              data-cloudinary-field="image_id"
              // data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
            />
            <label htmlFor="upload">
              <Button
                color="primary"
                component="span"
              >
                Change Avatar
              </Button>
            </label>
          </div>
        </div>
        <div className={styles.userInfo}>
          <div>Hello, </div>
          <div>{global.userData.first} {global.userData.last}</div>
          <div className={styles.username}>@{global.userData.username}</div>
          <Button
            style={{ marginTop: "26px", alignSelf: "center" }}
            variant="contained"
            color="secondary"
            onClick={logout}>
            Log out
          </Button>
        </div>
      </div>
      <div className={styles.settings}>
        <div style={{ fontSize: "22px", alignSelf: "center" }}>Settings</div>
        <div className={styles.settingBox}>
          <div style={{ fontSize: "18px" }}>Name</div>
          <TextField id="first"
            style={{ marginTop: "12px" }}
            label="first"
            variant="outlined"
            onChange={(e) => setFirst(e.target.value)}
            value={first}
          />
          <TextField id="last"
            style={{ marginTop: "12px" }}
            label="last"
            variant="outlined"
            onChange={(e) => setLast(e.target.value)}
            value={last}
          />
          <Button
            style={{ marginTop: "12px" }}
            variant="contained"
            onClick={changeName}
          >Save Changes</Button>
        </div>
        <div className={styles.settingBox}>
          <div style={{ fontSize: "18px" }}>Password</div>
          {message ? <div style={{ fontSize: "12px", color: "red" }}>Passwords do not match</div> : <div></div>}
          <TextField
            style={{ marginTop: "12px" }}
            id="first"
            type="password"
            label="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password} />
          <TextField
            style={{ marginTop: "12px" }}
            id="last"
            type="password"
            label="verify password"
            variant="outlined"
            onChange={(e) => setPasswordCheck(e.target.value)}
            value={passwordCheck} />
          <Button
            style={{ marginTop: "12px" }}
            variant="contained"
            onClick={changePassword}
            >Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default Settings;