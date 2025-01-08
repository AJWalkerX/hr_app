import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import PersonalShiftList from '../components/organisms/PersonalShiftList/PersonalShiftList'

function PersonalShiftListPage() {
  return (
    <div className="container-fluid"  style={{ height:'100vh'}}>
     <div className="row">
     <div className="col-2">
     <PersonalSidebar/>
     </div>
     <div className="col-10" >
       <PersonalShiftList/>
     </div>
     </div>
    
   </div>
  )
}

export default PersonalShiftListPage
