import React from 'react'
import UserProfileSettings from '../components/molecules/UserProfileSettings/UserProfileSettings'
import './UserProfileSettingsPage.css';
import PersonalSidebar from '../components/molecules/PersonalPanel/PersonalSidebar';

function UserProfileSettingsPage() {
  return (
    <>
    <div className="container-profile-settings ">
      <div className="col-2">
        <PersonalSidebar/>
      </div>
      <div className="col-10">
      <UserProfileSettings/>
      </div>
  
    </div>
    </>
  )
}

export default UserProfileSettingsPage
