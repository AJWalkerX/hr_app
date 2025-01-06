import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminHome from '../components/molecules/AdminPanel/AdminHome'

function AdminHomePage() {
  return (
        <div className='container-fluid' style={{ height:'100vh',backgroundColor: '#f0f4f8' }}>
        <div className='row'>
            <div className="col-2"><AdminSidebar/> </div>
            <div className="col-10"><AdminHome/></div> 
        </div>
        </div>
  )
}

export default AdminHomePage