//import { useState } from 'react'
//import './App.css'
import Header from './components/header'
import Cards from './components/cards'
import ArrayInfos from './components/arrayInfos'
function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className='m-4'>
      <Header />
      <Cards />
      <ArrayInfos />
    </div>   
  )
}

export default App
