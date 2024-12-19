import React from 'react';
import logo from '../img/ik-logo2.svg';
import UserInformationHeader from '../components/molecules/UserInformation/UserInformationHeader';
import UserInformationBody from '../components/molecules/UserInformation/UserInformationBody';
import './UserInformationPage.css';  // CSS dosyasını ekleyin

function UserInformationPage() {
  return (
    <div className="full-background">
      <div className="container">
        <div className="row mb-3 border">
          <UserInformationHeader />
        </div>

        <div className="row">
          <UserInformationBody />
        </div>
      </div>
    </div>
  );
}

export default UserInformationPage;