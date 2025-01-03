import React from 'react'
import ShiftRequestOrganism from '../components/organisms/ShiftRequest/ShiftRequestOrganism'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'

function ShiftManagerPage() {
  return (
    <div className="container">
        
    <div className="row">
      <div className="col-1">
        <ManagerSidebar/>
      </div>
      <div className="col-11 " style={{marginTop:'70px', marginLeft: '250px'}}>
      <ShiftRequestOrganism/>
      </div>
      
    </div>
</div>
  )
}

export default ShiftManagerPage
