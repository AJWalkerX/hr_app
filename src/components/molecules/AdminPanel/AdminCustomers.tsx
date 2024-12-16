import React from 'react'
import CustomerCard from '../../atoms/CustomerCard/CustomerCard'
import { useDispatch } from 'react-redux'
import { hrDispatch } from '../../../stores'
import { adminLogout } from '../../../stores/features/adminAuthSlice';

function AdminCustomers() {
  return (
    <>
    <div className='row mt-4' >
        <div className="col-3">
        <p style={{ fontSize: '25px', fontWeight: 'bold'}}>Müşteriler</p>
        </div>
        <div className='col-5'></div>
       <div className="col-4 d-flex">
       <input className="mr-sm-2 me-2 rounded-3 border border-primary" type="search"  aria-label="Search" />
       <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Arama</button>
    </div>
    </div>
    <div className="row mt-5">

    <table className="table align-middle mb-0 bg-white">
  <thead className="bg-light">
    <tr>
      <th>Personel Info</th>
      <th>Plan</th>
      <th>Balance</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <CustomerCard Name='Mehmet' Email='mehmet@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/1.jpg'/>
    <CustomerCard Name='Alex' Email='alex@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/2.jpg'/>
    <CustomerCard Name='Alper' Email='alper@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/3.jpg'/>
    <CustomerCard Name='Ahmet' Email='ahmet@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/4.jpg'/>
    <CustomerCard Name='Emine' Email='emine@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/5.jpg'/>
    <CustomerCard Name='Mehmet' Email='mehmet@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/6.jpg'/>
    <CustomerCard Name='Mehmet' Email='mehmet@gmail.com' Plan= 'premium' Balance='100'Status='Active' Avatar='https://mdbootstrap.com/img/new/avatars/7.jpg'/>

    
  </tbody>
</table>
    </div>
    </>
  )
}

export default AdminCustomers