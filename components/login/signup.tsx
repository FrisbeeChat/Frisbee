import React, {useRef} from 'react';
import axios from 'axios';

import styles from './login.module.css'

const SignUp:React.FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

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
    console.log(resp);
  }

  return (

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
          aria-describedby="password-constraints"
          required
        />
        <button id="toggle-password" type="button" aria-label="Show password as plain text. Warning: this will display your password on the screen.">Show password</button>
        <div id="password-constraints">Eight or more characters, with at least one&nbsp;lowercase and one uppercase letter.</div>
      </section>
      <button onClick={handleSignUp}> Submit </button>
    </form>

  )
}

export default SignUp;
