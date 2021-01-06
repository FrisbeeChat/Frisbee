import React from 'react';
import styles from './header.module.css'
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context'
import { AppBar, Toolbar, Button, Container, Badge, Popover } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import axios from 'axios';

const Settings: React.FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <div>hello world</div>
    </div>
  )
}

export default Settings;