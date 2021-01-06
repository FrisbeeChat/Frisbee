import React, { useContext, useRef, useState } from 'react';
import Router from 'next/router';
import { NextPageContext } from 'next';
import axios from 'axios';
import styles from './login.module.css'
import LoginHead from './loginHead';
import { Grid, TextField, Button, Container } from '@material-ui/core';

const Login = ({signUp}: any) => {
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
    } catch {
      setMessage('please check username or password')
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
    >
      <LoginHead />
      <Grid
       className={styles.login}
       style={message === '' ? {height: "350px"} : {height: "390px"}}
      >
        {message === '' ? <div></div> : <div style={{ color: "red", alignSelf: "center", marginTop: "10px" }}>{message}</div>}
        <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(e) => changeUsername(e)} />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password" value={password} onChange={(e) => changePassword(e)} />
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        <Button variant="contained" color="secondary" onClick={signUp}>Sign up</Button>
      </Grid>
    </Grid>
  )
}

export default Login;
