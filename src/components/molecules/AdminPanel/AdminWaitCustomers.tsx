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
      <th>Şirket/Pozisyon</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <WaitCustomerCard Name='harun' Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior' />
    <WaitCustomerCard Name='alperen' Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior'  />
    <WaitCustomerCard Name='selin' Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior'/>
    <WaitCustomerCard Name='muzaffer' Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior'/>
    <WaitCustomerCard Name='burak' Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior'/>
    <WaitCustomerCard Name='anıl'  Surname='kaya' Email='harun@gmail.com' CompanyName='Bilge Adam' Position='Junior'/>
    

    
  </tbody>
</table>
    </div>
    </>
  )
}

export default AdminWaitCustomers