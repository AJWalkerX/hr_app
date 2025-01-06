import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerHome from '../components/molecules/ManagerPanel/ManagerHome'
import AdminHome from '../components/molecules/AdminPanel/AdminHome'


function ManagerHomePage() {
  return (
    <div className='container-fluid' style={{ height:'100vh',backgroundColor: '#f0f4f8' }}>
    <div className='row'>
        <div className="col-2" style={{backgroundColor: '#f0f4f8'}}><ManagerSidebar/></div>
        <div className="col-10 " style={{backgroundColor: '#f0f4f8'}}><ManagerHome/></div> 
    </div>
    </div>
    
  )
}

export default ManagerHomePage
