import React, { useState, useContext } from 'react';
import Router from 'next/router';
import axios from 'axios';
import styles from './login.module.css'
import LoginHead from './loginHead';
import { Grid, FormControl, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import { Context } from '../context';

const Login = ({signUp}: any) => {
  const global = useContext(Context);

  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // const changeUsername = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   setUsername(e.target.value)
  // }
  // const changePassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  //   setPassword(e.target.value)
  // }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "white", height: "98vh" }}
    >
      <LoginHead />
      <Grid
       className={styles.login}
       style={message === '' ? {height: "280px"} : {height: "315px"}}
      >
        {message === '' ? <div></div> : <div style={{ color: "red", alignSelf: "center", marginTop: "0px" }}>{message}</div>}
        <form className={styles.form} onSubmit={(e) => handleLogin(e)}>
          <FormControl className={styles.field} variant="outlined" required>
            <InputLabel htmlFor="username">username</InputLabel>
            <OutlinedInput
              id="username"
              aria-describe={`username, cannot be longer than 16 characters or include ' or "`}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles.field} variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          type="submit"
          data-testid="submit"
        >
          Login
        </Button>
          </form>
        <Button
          variant="contained"
          color="secondary"
          onClick={signUp}
        >
          Sign up
        </Button>
      </Grid>
      <img className={styles.mailbox} src="https://frisbee-images.s3-us-west-1.amazonaws.com/mailbox.jpg"/>
    </div>
  )
}

export default Login;
