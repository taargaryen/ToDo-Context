import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListeDo from './Components/ListeDo'
import ContextProvider from './Components/contexts/context';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" id='wwo'>
      <ContextProvider>
        <ListeDo/>
      </ContextProvider>
      
    </div>
  )
}

export default App
