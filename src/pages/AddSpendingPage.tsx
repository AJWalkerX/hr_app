import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import AddSpending from '../components/molecules/Spending/AddSpending'

function AddSpendingPage() {
  return (
    <div className='container'>
        <div className='row'>
            <div className="col">
                <PersonalSidebar/>
            </div>
            <div className="col">
                <AddSpending/>
            </div>
        </div>
    </div>
  )
}

export default AddSpendingPage