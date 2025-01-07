import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import ViewAllMyEmbezzlement from '../components/molecules/PersonalPanel/ViewAllMyEmbezzlement'

function PersonalViewAllMyEmbezzlementPage() {
  return (
    <>
    <div className='container-profile-settings'>
        <div className='col-2'>
            <PersonalSidebar/>
        </div>
          <div className='col-10'>
            <ViewAllMyEmbezzlement/>
          </div>
    </div>
    </>
  )
}

export default PersonalViewAllMyEmbezzlementPage