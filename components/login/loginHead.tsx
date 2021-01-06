import React, { useContext, useRef, useState } from 'react';
import Router from 'next/router';
import { NextPageContext } from 'next';
import axios from 'axios';
import styles from './login.module.css'
import { AppBar, Grid } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

const LoginHead: React.FC = () => {
  return (
    <AppBar className={styles.loginHeader}>
      <Grid
        container
        justify="center"
      >
        <div className={styles.headerContent}>
          <MarkunreadMailboxIcon style={{ marginRight: "12px" }} />
          <div>Postcard</div>
        </div>
      </Grid>
    </AppBar>
  )
}

export default LoginHead;