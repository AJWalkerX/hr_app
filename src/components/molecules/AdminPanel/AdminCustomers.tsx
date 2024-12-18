import React from 'react'
import CustomerCard from '../../atoms/CustomerCard/CustomerCard';

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
      <th>Şirket Bilgisi</th>
      <th >Ödenen Hizmet Bedeli</th>
      <th>Durum</th>
      <th>İşlemler</th>
    </tr>
  </thead>
  <tbody>
    <CustomerCard CompanyName='Mehmet' CompanyMail='mehmet@gmail.com'    Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/1.jpg'/>
    <CustomerCard CompanyName='Alex'   CompanyMail='alex@gmail.com'      Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/2.jpg'/>
    <CustomerCard CompanyName='Alper'  CompanyMail='alper@gmail.com'     Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/3.jpg'/>
    <CustomerCard CompanyName='Ahmet'  CompanyMail='ahmet@gmail.com'     Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/4.jpg'/>
    <CustomerCard CompanyName='Emine'  CompanyMail='emine@gmail.com'     Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/5.jpg'/>
    <CustomerCard CompanyName='Mehmet' CompanyMail='mehmet@gmail.com'    Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/6.jpg'/>
    <CustomerCard CompanyName='Mehmet' CompanyMail='mehmet@gmail.com'    Balance='100'Status='Active'   CompanyLogo='https://mdbootstrap.com/img/new/avatars/7.jpg'/>

    
  </tbody>
</table>
    </div>
    </>
  )
}

export default AdminCustomers