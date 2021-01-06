import React from 'react';
import styles from './header.module.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context'
import { AppBar, Toolbar, Button, Container, Badge, Popover } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import axios from 'axios';

const Settings: React.FC = () => {
  const global = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const upload = async (e: any) => {
    const image = e.target.files[0]
    const reader = new FormData()
    reader.append('file', image);
    reader.append('upload_preset', 'postcardcover')
    setLoading(true);
    const res = await fetch('https://api.cloudinary.com/v1_1/avatar/image/upload', {
      method: 'POST',
      body: reader
    })
    const file = await res.json();
    setImage(file.url);
  }

  return (
    <div className={styles.settingsContainer}>
      <div>
        <img className={styles.settingsPhoto} src={global.userData.avatar} />
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