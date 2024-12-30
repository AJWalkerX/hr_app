import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import PersonalViewYourPermitPage from './PersonalViewYourPermitPage'
import ViewYourPermit from '../components/molecules/ViewYourPermit/ViewYourPermit'

function ManagerPermitViewPage() {
  return (
    <div style={{ backgroundColor: '#e5e8e8',height:'100vh'}} className="container-fluid">
        
    <div className="row">
      <div className="col-1">
        <ManagerSidebar/>
      </div>
      
      <div  className="col-11 ">
      <ViewYourPermit/>
      </div>
       
    </div>
</div>
  )
}

export default ManagerPermitViewPage