import React from 'react';
import styles from './login.module.css'
import { AppBar, Grid } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

const LoginHead: React.FC = () => (
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

export default LoginHead;