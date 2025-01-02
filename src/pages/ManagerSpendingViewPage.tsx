import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerEmployeeSpendingList from '../components/molecules/ManagerPanel/ManagerEmployeeSpendingList'

function ManagerSpendingViewPage() {
  return (
    <div style={{ backgroundColor: '#e5e8e8',height:'100vh'}} className="container-fluid">
        <div className='row'>
            <div className="col-1">
                <ManagerSidebar/>
            </div>
            <div className="col-11">
                <ManagerEmployeeSpendingList/>
            </div>
        </div>
    </div>
  )
}

export default ManagerSpendingViewPage