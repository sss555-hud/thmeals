import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Alfavit from '../Alfavit/Alfavit'

function Layout() {
  return (
    <div>
        <Header />
        <Outlet />
        <Alfavit />
        <Footer />
    </div>
  )
}

export default Layout
