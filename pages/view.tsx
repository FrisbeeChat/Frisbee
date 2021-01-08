import * as React from 'react';
import Header from '../components/header/header'
import AllMessages from '../components/view/allMessages';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AllMessages />
    </div>
  )
}

export default App;