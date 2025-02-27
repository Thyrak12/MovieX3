import { useState } from 'react'
import './App.css'
import Carousel from './Carousel'
import Header from './Header'
import Footer from './Footer'
import Slide from './Slide'
function App() {

  return (
    <>
      <Header />
      <Carousel />
      <Slide />
      <Slide />
      <Slide />
      <Footer />
    </>
  )
}

export default App
