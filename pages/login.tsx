import React, { useState } from 'react';

import Link from 'next/link';
// import Header from '../components/header/header'
// import Footer from '../components/footer/footer'
import Login from '../components/login/login'
import SignUp from '../components/login/signup'

import { ConfigProvider, Context } from '../components/context'


const App: React.FC = () => {
  const [onLogin, setOnLogin] = useState(true);

// wrap in a two branch useContext containing all of login / signup state
  return (

      <div>
        { onLogin ?
        <div>
          <Login />
        </div>
        :
        <div>
          <SignUp />
        </div>
        }
        <div>
          <button onClick={()=>{setOnLogin(true)}}>Login</button>
          <button onClick={()=>{setOnLogin(false)}}>Create Account</button>
        </div>
        <br />
        {/* <Link href="/">
          HOME
        </Link> */}
      </div>

  )
}

export default App;