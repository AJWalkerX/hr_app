import React from 'react'
import logo from "../../../img/ik-logo2.svg" 
import './UserInformationHeader.css'


function UserInformationHeader() {
  return (
    <div className="row text-center  ">
        <p style={{fontSize: '40px', fontWeight:'bolder', color:'rgb(10, 57, 129)'}} className='informationHeader-text ms-5 mt-3'>
          Bilgilerinizi Tamamlayın
        </p>
      </div>
    
  )
}

export default UserInformationHeader
