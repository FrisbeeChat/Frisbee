import React from 'react';


const Login:React.FC = () => {
  return (
    <div>
      <form>
        <input
          id="inputFirstName"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          id="inputLastName"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          id="inputEmail"
          type="email"
          placeholder="Email"
          required
        />
        <input
          id="inputPassword"
          type="password"
          minLength={8}
          placeholder="password"
          required
        />
      </form>
    </div>
  )
}

export default Login;
