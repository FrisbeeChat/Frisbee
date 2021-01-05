import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';

import styles from './login.module.css'
import Router from 'next/router';
import { Context } from '../context';

const SignUp: React.FC = () => {

  const [message, setMessage] = useState('')
  const global = useContext(Context)
  const userNameRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordButtonRef = useRef<HTMLButtonElement>(null);


  async function handleSignUp() {
    const resp = await axios.post(`${window.location.origin}/api/signup`, {
      data: {
        username: userNameRef.current.value,
        email: emailRef.current.value,
        first: firstNameRef.current.value,
        last: lastNameRef.current.value,
        password: passwordRef.current.value,
      }
    })
    if (resp.data.message) {
      setMessage('please check the user name or password')
    } else {
      global.setUserData(resp.data);
      Router.replace('/');
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

  return (
    <div>
      <h2>{message}</h2>
      <form className={styles.container}>
        <section>
          <label htmlFor="userName">UserName</label>
          <input
            id="userName"
            type="text"
            placeholder="User Name"
            ref={userNameRef}
            autoFocus
            required
          />
        </section>
        <section>
          <label htmlFor="inputFirstName">First Name</label>
          <input
            id="inputFirstName"
            type="text"
            placeholder="First Name"
            ref={firstNameRef}
            required
          />
        </section>
        <section>
          <label htmlFor="inputLastName">Last Name</label>
          <input
            id="inputLastName"
            type="text"
            placeholder="Last Name"
            ref={lastNameRef}
            required
          />
        </section>
        <section>
          <label htmlFor="inputEmail">Email</label>
          <input
            id="inputEmail"
            type="email"
            placeholder="Email"
            ref={emailRef}
            autoComplete="email"
            required
          />
        </section>
        <section>
          <label htmlFor="inputPassword">Password</label>
          <input
            id="inputPassword"
            name="new-password"
            type="password"
            placeholder="password"
            ref={passwordRef}
            onChange={validatePassword}
            aria-describedby="password-constraints"
            required
          />
          <div id="password-constraints">Eight or more characters, with at least one&nbsp;lowercase and one uppercase letter.</div>
          <button
            id="toggle-password"
            type="button"
            aria-label="Show password as plain text. Warning: this will display your password on the screen."
            ref={passwordButtonRef}
            onClick={togglePassword}
          >Show password</button>
        </section>
        <button onClick={handleSignUp}> Submit </button>
      </form>
    </div>
  )
}

export default SignUp;
