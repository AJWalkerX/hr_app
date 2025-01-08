import React from 'react'
import UserPermit from '../components/molecules/UserPermit/UserPermit'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'

function UserPermitPage() {
  return (
    <div style={{ height:'100vh'}} className="container-fluid">
        
        <div className="row">
          <div className="col-1">
            <ManagerSidebar/>
          </div>
          
          <div  className="col-11 ">
          <UserPermit/>
          </div>
           
        </div>
    </div>
  )
}

export default UserPermitPage