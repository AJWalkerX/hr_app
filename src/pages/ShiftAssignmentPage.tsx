import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ShiftAssignment from '../components/organisms/ShiftAssignment/ShiftAssignment'
import ShiftAssignmentUpdate from '../components/organisms/ShiftAssignmentUpdate/ShiftAssignmentUpdate'


function ShiftAssignmentPage() {
  return (
    <div className="container">
        
      <div className="row">
        <div className="col-1">
          <ManagerSidebar/>
        </div>
        <div className="col-11 " style={{marginTop:'70px', marginLeft: '200px'}}>
          <div className="row">
            <ShiftAssignment/>
          </div>
          <div className="row">
            <ShiftAssignmentUpdate/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShiftAssignmentPage
