import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import AddSpending from '../components/molecules/Spending/AddSpending'
import './AddSpendingPage.css'

function AddSpendingPage() {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className="col">
            <PersonalSidebar/>
            </div>
            <div className="col spending-add">
                <AddSpending/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddSpendingPage