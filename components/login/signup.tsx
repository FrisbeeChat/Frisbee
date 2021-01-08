import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import styles from './signup.module.css';
import Router from 'next/router';
import { Context } from '../context';
import LoginHead from './loginHead';
import { Grid, TextField, Button } from '@material-ui/core';


const SignUp = ({login}: any) => {
  const [message, setMessage] = useState('');
  const global = useContext(Context);
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [existingErr, setExistingErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [charErr, setCharErr] = useState(false);

  async function handleSignUp() {
    try {
      if (username === '') {
        setUsernameErr(true);
      } else if (first === '' || last === '') {
        setNameErr(true);
      } else if (username.includes('"') || username.includes("'") || username.match(/\\/) || password.includes("'") || password.includes("'") || password.match(/\\/)) {
        setCharErr(true);
      } else {
        const resp = await axios.post(`${window.location.origin}/api/signup`, {
          data: {
            username,
            email,
            first,
            last,
            password,
          }
        })
        if (resp.data.message) {
          setMessage('please check the user name or password');
        } else {
          global.setUserData(resp.data);
          Router.replace('/');
        }
      }
    } catch {
      setExistingErr(true);
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ background: "white", height: "100vh" }}
    >
      <LoginHead />
      <Grid
       className={styles.login}
      >
        {existingErr ? <div style={{ fontSize: "12px", color: "red" }}>Existing user</div> : <div></div>}
        {charErr ? <div style={{ fontSize: "12px", color: "red" }}>Cannot use ', ", or backslashes</div> : <div></div>}
        {nameErr ? <div style={{ fontSize: "12px", color: "red" }}>Must fill in name</div> : <div></div>}
        {usernameErr ? <div style={{ fontSize: "12px", color: "red" }}>Please fill in username</div> : <div></div>}
        <TextField
          id="username"
          label="username"
          variant="outlined"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextField
          id="first"
          label="first name"
          variant="outlined"
          value={first}
          onChange={(e)=>setFirst(e.target.value)}
        />
        <TextField
          id="last"
          label="last name"
          variant="outlined"
          value={last}
          onChange={(e)=>setLast(e.target.value)}
        />

        <TextField
          id="email"
          label="email"
          variant="outlined"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          id="psw"
          label="password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignUp}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={login}
        >
          Back to Login
        </Button>
      </Grid>
    </Grid>
  )
}

export default SignUp;
