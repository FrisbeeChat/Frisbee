import React, { useState, useContext } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styles from './login.module.css'
import LoginHead from './loginHead';
import { Grid, TextField, Button } from '@material-ui/core';

import { Context } from '../context';

const Login = ({signUp}: any) => {
  const global = useContext(Context);

  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const changePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    try {
      await axios.post(`${window.location.origin}/api/login`, {
        data: {
          username,
          password,
        }
      })
      Router.replace('/');
    } catch (err) {
      console.log(username, password)
      console.log(err)
      setMessage('please check username or password')
    }
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ background: "white", height: "100vh" }}
    >
      <LoginHead />
      <Grid
       className={styles.login}
       style={message === '' ? {height: "280px"} : {height: "315px"}}
      >
        {message === '' ? <div></div> : <div style={{ color: "red", alignSelf: "center", marginTop: "0px" }}>{message}</div>}
        <TextField
          id="username"
          label="username"
          variant="outlined"
          value={username}
          onChange={(e) => changeUsername(e)}
          autoFocus
        />
        <TextField
          id="psw"
          variant="outlined"
          label="password"
          type="password"
          value={password}
          onChange={(e) => changePassword(e)}
        />
        <Button
          id="login"
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={signUp}
        >
          Sign up
        </Button>
      </Grid>
      <img className={styles.mailbox} src="https://frisbee-images.s3-us-west-1.amazonaws.com/mailbox.jpg"/>
    </Grid>
  )
}

export default Login;
