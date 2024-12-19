import React from 'react'
import logo from "../../../img/ik-logo2.svg" 


function UserInformationHeader() {
  return (
    <div className="row align-items-center">
      <div className="col-1 d-flex justify-content-center">
        <img className='informationHeader-logo mt-2 ms-4' style={{width:'120px', height:'120px'}} src={logo}/> 
      </div>
      <div className="col-3 d-flex align-items-center">
        <span className='informationHeader-text' 
          style={{fontWeight: 'bolder', fontSize:'40px', color:'rgb(10, 57, 129)'}}>
          KolaysaİK
        </span>
      </div>
      <div className="col-8 d-flex justify-content-start">
        <p style={{fontSize: '40px', fontWeight:'bolder'}} className='informationHeader-text ms-5 mt-3'>
          Bilgilerinizi Tamamlayın
        </p>
      </div>
    </div>
  )
}

export default UserInformationHeader
