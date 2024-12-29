import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import UserProfileSettings from '../components/molecules/UserProfileSettings/UserProfileSettings'

function ManagerProfileSettingsPage() {
  return (
    <>
    <div className="container-profile-settings ">
      <div className="col-2">
        <ManagerSidebar/>
      </div>
      <div className="col-10">
      <UserProfileSettings/>
      </div>
  
    </div>
    </>
  )
}

export default ManagerProfileSettingsPage