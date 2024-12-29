import React from 'react'
import './UserInformationButton.css' 
import { useNavigate } from 'react-router-dom'

function UserInformationButton() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/manager")
  }
  return (
    <div className='d-flex justify-content-center'>
        <button className=' ms-5 saveButton' onClick={handleSave}>Kaydet</button>
    </div>
  )
}

export default UserInformationButton