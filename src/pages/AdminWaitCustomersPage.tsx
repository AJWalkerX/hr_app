import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminWaitCustomers from '../components/molecules/AdminPanel/AdminWaitCustomers'

function AdminWaitCustomersPage() {
  return (
    <div className='row'>
            <div className="col"> <AdminSidebar/> </div>
            <div className="col"> <AdminWaitCustomers/></div>
           
        </div>
  )
}

export default AdminWaitCustomersPage