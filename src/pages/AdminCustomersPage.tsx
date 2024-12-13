import React from 'react'
import AdminSidebar from '../components/molecules/AdminPanel/AdminSidebar'
import AdminCustomers from '../components/molecules/AdminPanel/AdminCustomers'

function AdminCustomersPage() {
  return (
    <div className='row'>
        <div className="col"><AdminSidebar/></div>
        <div className="col"><AdminCustomers/></div>

    </div>
  )
}

export default AdminCustomersPage