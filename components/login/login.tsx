import React, {useRef} from 'react';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const Login:React.FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleLogin() {

    const resp = await axios.post('http://localhost:3000/api/login', {
      data: {
        username: userNameRef.current.value,
        password: passwordRef.current.value
      }
    })
    console.log(resp);
  }
  return (
    <div>
        <input
          id="userName"
          type="text"
          placeholder="User Name"
          ref={userNameRef}
          required
        />
        <input
          id="inputPassword"
          type="text"
          minLength={8}
          placeholder="password"
          ref={passwordRef}
          required
        />
        <button onClick={handleLogin} >Submit</button>
    </div>
  )
}

export default Login;
