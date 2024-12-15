import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminWaitCustomers from '../components/molecules/AdminPanel/AdminWaitCustomers'

function AdminWaitCustomersPage() {
  return (
    <div className='row'>
            <div className="col-3"> <AdminSidebar/></div>
            <div className="col-9"> <AdminWaitCustomers/></div>
        </div>
  )
}

export default AdminWaitCustomersPage