import React from 'react'
import WaitCustomerCard from '../../atoms/WaitCustomerCard/WaitCustomerCard'

function AdminWaitCustomers() {
  return (
    <>
    <div className='row mt-4' >
        <div className="col-3">
        <p style={{ fontSize: '25px', fontWeight: 'bold'}}>Onay Bekleyen Müşteriler</p>
        </div>
        <div className='col-5'>
        </div>
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
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <WaitCustomerCard Name='harun' Email='harun@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/8.jpg'/>
    <WaitCustomerCard Name='alperen' Email='alperen@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/7.jpg'/>
    <WaitCustomerCard Name='selin' Email='selin@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/6.jpg'/>
    <WaitCustomerCard Name='muzaffer' Email='muzaffer@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/5.jpg'/>
    <WaitCustomerCard Name='burak' Email='burak@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/4.jpg'/>
    <WaitCustomerCard Name='anıl' Email='anıl@gmail.com' Status='InActive' Avatar='https://mdbootstrap.com/img/new/avatars/3.jpg'/>
    

    
  </tbody>
</table>
    </div>
    </>
  )
}

export default AdminWaitCustomers