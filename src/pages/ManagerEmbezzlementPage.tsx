import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerEmbezzlement from '../components/molecules/ManagerPanel/ManagerEmbezzlement'

function ManagerEmbezzlementPage() {
  return (
    <div className=' container-fluid' style={{height:'100vh'}}>
        <div className='row'>
            <div className='col-2'><ManagerSidebar/></div>
            <div className='col-10'><ManagerEmbezzlement/></div>
        </div>
    </div>
  )
}

export default ManagerEmbezzlementPage