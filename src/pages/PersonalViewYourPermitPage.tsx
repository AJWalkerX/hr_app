import React from 'react'
import ViewYourPermit from '../components/molecules/ViewYourPermit/ViewYourPermit'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'

function PersonalViewYourPermitPage() {
  return (
    <>
    <div className="container-profile-settings ">
      <div className="col-2">
        <PersonalSidebar/>
      </div>
      <div className="col-10">
      <ViewYourPermit/>
      </div>
  
    </div>
    </>
  )
}

export default PersonalViewYourPermitPage