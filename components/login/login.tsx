import React, { useContext, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../context'
import axios from 'axios';

import styles from './login.module.css'

const Login: React.FC = () => {

  const global = useContext(Context)
  const router = useRouter();

  const [message, setMessage] = useState('')
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordButtonRef = useRef<HTMLButtonElement>(null);


  async function handleLogin() {

      const resp = await axios.post('http://localhost:3000/api/login', {
        data: {
          username: userNameRef.current.value,
          password: passwordRef.current.value,
        }
      })
      if (resp.data.message) {
        setMessage('please check the user name or password')
      } else {
        console.log(resp);
        global.setUserData(resp.data);
        // const pop = await axios.post('')// ? set messages array from here??
        router.replace('/');
      }
  }

  function togglePassword() {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
      passwordButtonRef.current.textContent = 'Hide password';
      passwordButtonRef.current.setAttribute('aria-label',
        'Hide password.');
    } else {
      passwordRef.current.type = 'password';
      passwordButtonRef.current.textContent = 'Show password';
      passwordButtonRef.current.setAttribute('aria-label',
        'Show password as plain text. ' +
        'Warning: this will display your password on the screen.');
    }
  }

  function validatePassword() {
    let message= '';
    if (!/.{8,}/.test(passwordRef.current.value)) {
      message = 'At least eight characters. ';
    }
    if (!/.*[A-Z].*/.test(passwordRef.current.value)) {
      message += '\nAt least one uppercase letter. ';
    }
    if (!/.*[a-z].*/.test(passwordRef.current.value)) {
      message += '\nAt least one lowercase letter.';
    }
    passwordRef.current.setCustomValidity(message);
  }
  return (
    <div>
      <h2>{message}</h2>
      <form className={styles.container} method="POST">
        <section>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            name="name"
            type="name"
            placeholder="User Name"
            ref={userNameRef}
            autoFocus
            required
          />
        </section>
        <section>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            name="current-password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
            onChange={validatePassword}
            ref={passwordRef}
            required
          />
          <div id="password-constraints">*Eight or more characters, with at least one&nbsp;lowercase and one uppercase letter.</div>
          <button
            id="toggle-password"
            type="button"
            aria-label="Show password as plain text. Warning: this will display your password on the screen."
            ref={passwordButtonRef}
            onClick={togglePassword}
          >Show password</button>

        </section>
        <button onClick={handleLogin} >Submit</button>
      </form>
    </div>
  )
}

export default Login;
