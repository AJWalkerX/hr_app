import React from 'react'
import PermitRequestOrganism from '../components/organisms/PermistRequest/PermitRequestOrganism'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import './PermitRequestPage.css'

function PermitRequestPage() {
  return (
    <div className="container">
        
        <div className="row">
          <div className="col">
            <PersonalSidebar/>
          </div>
          <div className="col permit-request ">
          <PermitRequestOrganism/>
          </div>
          
        </div>
    </div>
  )
}

export default PermitRequestPage