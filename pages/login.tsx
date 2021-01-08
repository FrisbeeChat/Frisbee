import React, { useState } from 'react';
import Login from '../components/login/login'
import SignUp from '../components/login/signup'

const App: React.FC = () => {
  const [onLogin, setOnLogin] = useState(true);

  return (
      <div>
        { onLogin ?
        <div>
          <Login signUp={()=>setOnLogin(false)}/>
        </div>
        :
        <div>
          <SignUp login={()=>setOnLogin(true)}/>
        </div>
        }
      </div>
  )
}

export default App;