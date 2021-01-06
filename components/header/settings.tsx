import React from 'react';
import styles from './header.module.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context'
import { AppBar, Toolbar, Button, Container, Badge, Popover } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import axios from 'axios';

const Settings: React.FC = () => {
  const global = useContext(Context);

  return (
    <div className={styles.settingsContainer}>
      <div>
        <img className={styles.settingsPhoto} src={global.userData.avatar}/>
        <div>change avatar</div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.username}>@{global.userData.username}</div>
        <div>{global.userData.first} {global.userData.last}</div>
      </div>
    </div>
  )
}

export default Settings;