// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Count from './components/Count';


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <Services />
        <Count />
         </div>
    </>
  )
}

export default App
