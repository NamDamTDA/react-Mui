import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AdminLayout = () => {
  return (
    <div>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default AdminLayout