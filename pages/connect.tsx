import * as React from 'react';
import Header from '../components/header/header'
import Connections from '../components/connect/connections'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Connections />
    </div>
  )
}

export default App;