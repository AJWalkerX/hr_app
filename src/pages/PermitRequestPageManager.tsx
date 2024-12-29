import React from 'react'
import PermitRequestOrganism from '../components/organisms/PermistRequest/PermitRequestOrganism'
import './PermitRequestPage.css'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'

function PermitRequestManagerPage() {
  return (
    <div className="container">
        
        <div className="row">
          <div className="col">
            <ManagerSidebar/>
          </div>
          <div className="col permit-request ">
          <PermitRequestOrganism/>
          </div>
          
        </div>
    </div>
  )
}

export default PermitRequestManagerPage