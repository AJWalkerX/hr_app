import React from 'react'
import logo from '../img/ik-logo2.svg'

function UserInformationPage() {
  return (
   <div className="container-fluid">
    <div className="row">
       <div className="col-2"></div>
       <div className="col-8">
        <div className="row">
            <a className='navbar-brand d-flex align-items-center ms-5'>
            <div className="col-6">
            <img src={logo} style={{width:'50px',height:'50px'}} /> 
            <span>KolaysaİK</span>
         </div>
         <div className="col-6"></div>
            </a>
         
        </div>
        <div className="row"></div>
       </div>
       <div className="col-2"></div>
    </div>
   </div>
  )
}

export default UserInformationPage