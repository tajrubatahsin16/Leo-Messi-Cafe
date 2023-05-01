import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Cafe from './components/Cafe/Cafe';
import BlogCom from './components/BlogComponents/BlogCom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Cafe></Cafe>
      <BlogCom></BlogCom>
    </div>
  )
}

export default App
