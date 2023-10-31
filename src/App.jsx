// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import Count from './components/Count';
import About from './components/About';
import Footer from './components/Footer';
import Clients from './components/Clients';


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Banner/>
        <Services />
        <Count />
        <About />
        <Clients />
        <Footer />
         </div>
    </>
  )
}

export default App
