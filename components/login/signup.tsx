import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.css';
import Router from 'next/router';
import LoginHead from './loginHead';
import { FormControl, Grid, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import { Visibility, VisibilityOff } from '@material-ui/icons';




const SignUp = ({login}: any) => {
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [existingErr, setExistingErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [charErr, setCharErr] = useState(false);
  const [lengthErr, setLengthErr] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSignUp = async (e: any) =>  {
    e.preventDefault();
    try {
      if (username === '') {
        setUsernameErr(true);
        setInvalid(true);
      } else if (username.length > 16) {
        setLengthErr(true);
        setInvalid(true);
      } else if (first === '' || last === '') {
        setNameErr(true);
        setInvalid(true);
      } else if (username.includes('"') || username.includes("'") || username.match(/\\/) || password.includes("'") || password.includes("'") || password.match(/\\/)) {
        setCharErr(true);
        setInvalid(true);
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
          Router.replace('/');
      }
    } catch (err) {
      setExistingErr(true);
      setInvalid(true);
    }
  }

  return (
    <Grid
      className={styles.container}
      container
    >
      <LoginHead />
      <Grid
       className={styles.login}
      >
        <div className={invalid ? styles.invalid : styles.valid}>
          {existingErr ? <div style={{ fontSize: "12px", color: "red" }}>Existing user</div> : <div></div>}
          {lengthErr ? <div style={{ fontSize: "12px", color: "red" }}>Username cannot be over 16 characters</div> : <div></div>}
          {charErr ? <div style={{ fontSize: "12px", color: "red" }}>Cannot use ', ", or backslashes</div> : <div></div>}
          {nameErr ? <div style={{ fontSize: "12px", color: "red" }}>Must fill in name</div> : <div></div>}
          {usernameErr ? <div style={{ fontSize: "12px", color: "red" }}>Please fill in username</div> : <div></div>}
        </div>
        <form className={styles.form} onSubmit={(e) => handleSignUp(e)}>
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
            <InputLabel htmlFor="first">first name</InputLabel>
            <OutlinedInput
              id="first"
              aria-describe="first name field"
              value={first}
              onChange={(e)=>setFirst(e.target.value)}
            />
          </FormControl>
          <FormControl className={styles.field} variant="outlined" required>
            <InputLabel htmlFor="last">last name</InputLabel>
            <OutlinedInput
              id="last"
              aria-describe="last name field"
              value={last}
              onChange={(e)=>setLast(e.target.value)}
            />
          </FormControl>


          <FormControl className={styles.field} variant="outlined" required>
            <InputLabel htmlFor="email">email</InputLabel>
            <OutlinedInput
            id="email"
            aria-describe="your email will be used for password recovery and nothing else"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
          Submit
        </Button>
          </form>
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
