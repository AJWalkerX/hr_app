import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerComment from '../components/molecules/ManagerPanel/ManagerComment'

function ManagerCommentPage() {
  return (
    <div className='container-fluid' style={{ height:'100vh'}}>
    <div className='row'>
        <div className="col-2"><ManagerSidebar/> </div>
        <div className="col-10"><ManagerComment/></div> 
    </div>
    </div>
    
  )
}

export default ManagerCommentPage