import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './page/Home'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])

  return (
      <Home />
  )
}

export default App
