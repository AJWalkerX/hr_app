import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerHome from '../components/molecules/ManagerPanel/ManagerHome'


function ManagerHomePage() {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#e5e8e8',height:'100vh'}}>
    <div className='row'>
        <div className="col-3"><ManagerSidebar/> </div>
        <div className="col-9"><ManagerHome/></div> 
    </div>
    </div>
    
  )
}

export default ManagerHomePage
