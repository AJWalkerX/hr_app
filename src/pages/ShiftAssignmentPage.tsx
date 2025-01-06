import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ShiftAssignment from '../components/organisms/ShiftAssignment/ShiftAssignment'

function ShiftAssignmentPage() {
  return (
    <div className="container">
        
    <div className="row">
      <div className="col-1">
        <ManagerSidebar/>
      </div>
      <div className="col-11 " style={{marginTop:'70px'}}>
      <div className="row">
      <ShiftAssignment/>
        </div>
      </div>
    </div>
</div>
  )
}

export default ShiftAssignmentPage
