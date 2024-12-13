import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminHome from '../components/molecules/AdminPanel/AdminHome'

function AdminHomePage() {
  return (
    
        
        <div className='row'>
            <div className="col"> <AdminSidebar/> </div>
            <div className="col"> <AdminHome/></div>
           
        </div>
        
    
  )
}

export default AdminHomePage