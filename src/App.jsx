import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'
import Carousel from './Carousel'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Footer />
    </>
  )
}

export default App
