import React from 'react'
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar'
import PersonalHome from '../components/molecules/PersonalPanel/PersonalHome'

function PersonelHomePage() {
  return (
    <div className="container-fluid"  style={{ height:'100vh',backgroundColor: '#f0f4f8' }}>
      <div className="row">
        <div className="col-2">
        <PersonalSidebar/>
        </div>
        <div className="col-10" style={{backgroundColor: '#f0f4f8'}}>
          <PersonalHome/>
        </div>
      </div>
    </div>
    

  )
}

export default PersonelHomePage