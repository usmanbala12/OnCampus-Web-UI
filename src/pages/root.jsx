import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/topBar'
import Footer from '../components/footer'


const root = () => {
  return (
    <div>
        <TopBar />
        <div id="content">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default root