import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminWaitCustomers from '../components/molecules/AdminPanel/AdminWaitCustomers'

function AdminWaitCustomersPage() {
  return (
    <div className='row'>
            <div className="col-2"> <AdminSidebar/></div>
            <div className="col-10"> <AdminWaitCustomers/></div>
        </div>
  )
}

export default AdminWaitCustomersPage