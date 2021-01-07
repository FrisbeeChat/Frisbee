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
  const passwordButtonRef = useRef<HTMLButtonElement>(null);


  async function handleSignUp() {
    // console.log(userNameRef.current.value)
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
      setMessage('please check the user name or password')
    } else {
      // global.setUserData(resp.data);
      Router.replace('/');
    }
  }

  // function validatePassword() {
  //   let message= '';
  //   if (!/.{8,}/.test(passwordRef.current.value)) {
  //     message = 'At least eight characters. ';
  //   }
  //   if (!/.*[A-Z].*/.test(passwordRef.current.value)) {
  //     message += '\nAt least one uppercase letter. ';
  //   }
  //   if (!/.*[a-z].*/.test(passwordRef.current.value)) {
  //     message += '\nAt least one lowercase letter.';
  //   }
  //   passwordRef.current.setCustomValidity(message);
  // }

  // function togglePassword() {
  //   if (passwordRef.current.type === 'password') {
  //     passwordRef.current.type = 'text';
  //     passwordButtonRef.current.textContent = 'Hide password';
  //     passwordButtonRef.current.setAttribute('aria-label',
  //       'Hide password.');
  //   } else {
  //     passwordRef.current.type = 'password';
  //     passwordButtonRef.current.textContent = 'Show password';
  //     passwordButtonRef.current.setAttribute('aria-label',
  //       'Show password as plain text. ' +
  //       'Warning: this will display your password on the screen.');
  //   }
  // }

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      style={{ background: "white", height: "100vh" }}
    >
      <LoginHead />
      <Grid
       className={styles.login} //make css mother fucker
      >
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
          variant="outlined"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSignUp}>Submit</Button>
        <Button variant="contained" color="secondary" onClick={login}>Back to Login</Button>

      </Grid>
    </Grid>
  )
}

export default SignUp;
