import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import ViewAllMySpending from '../components/molecules/Spending/ViewAllMySpending'

function PersonalViewAllMySpendingPage() {
  return (
    <>
    <div className='container-profile-settings'>
    <div className="col-2">
        <PersonalSidebar/>
      </div>
        <div className='col-10'>
        <ViewAllMySpending/>
        </div>
    </div>
    </>
  )
}

export default PersonalViewAllMySpendingPage