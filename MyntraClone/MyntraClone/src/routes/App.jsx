import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems.jsx'


function App() {
  

  return (
    <>
    <Header/>
      <FetchItems />
      <Outlet />
    <Footer />
    </>
  )
}

export default App
