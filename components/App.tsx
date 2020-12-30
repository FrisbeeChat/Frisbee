import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '../components/header/header'
import { ConfigProvider } from './context'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Header />
      balls
    </ConfigProvider>
  )
}

export default App;