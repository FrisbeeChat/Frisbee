import React from 'react';
import styles from './header.module.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context'
import { AppBar, Toolbar, Button, Container, Badge, Popover } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import axios from 'axios';

interface Props {
  upload: (arg: string) => void;
  avatar: string;
}

const Settings = ({upload, avatar}: Props) => {
  const global = useContext(Context);

  return (
    <div className={styles.settingsContainer}>
      <div>
        <img className={styles.settingsPhoto} src={avatar} />
        <div className={styles.uploadButton}>
          <input
            accept="image/png, image/jpg"
            style={{ display: "none" }}
            id="upload"
            type="file"
            onChange={(e) => upload(e)}
            data-cloudinary-field="image_id"
            data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
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
      </div>
    </div>
  )
}

export default Settings;