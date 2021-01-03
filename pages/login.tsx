import * as React from 'react';

import Link from 'next/link';
// import Header from '../components/header/header'
// import Footer from '../components/footer/footer'




const App: React.FC = () => {
  return (
    <div>
      LOGIN PAGE
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
        <input
          id="inputPassword"
          type="password"
          minLength={8}
          placeholder="retype password"
          required
        />
      </form>
      <div>
        <button>Login</button>
        <button>Create Account</button>
      </div>
      <br />
      <Link href="/">
        HOME
        </Link>
    </div>
  )
}

export default App;