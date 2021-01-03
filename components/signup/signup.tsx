import React, {useRef} from 'react';
import axios from 'axios';

const SignUp:React.FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  async function handleSignUp() {
    const resp = await axios.post('http://localhost:3000/api/signup', {
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
    <div>
      <form>
      <input
          id="userName"
          type="text"
          placeholder="User Name"
          ref={userNameRef}
          required
        />
      <input
          id="inputFirstName"
          type="text"
          placeholder="First Name"
          ref={firstNameRef}
          required
        />
        <input
          id="inputLastName"
          type="text"
          placeholder="Last Name"
          ref={lastNameRef}
          required
        />
        <input
          id="inputEmail"
          type="email"
          placeholder="Email"
          ref={emailRef}
          required
        />
        <input
          id="inputPassword"
          type="password"
          minLength={8}
          placeholder="password"
          ref={passwordRef}
          required
        />
        <input
          id="inputPassword2"
          type="password"
          minLength={8}
          placeholder="retype password"
          required
        />
      </form>
      <button onClick={handleSignUp}> Submit </button>
    </div>
  )
}

export default SignUp;
