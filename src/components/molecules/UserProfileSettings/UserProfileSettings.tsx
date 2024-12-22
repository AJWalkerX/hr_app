import React, { useState } from "react";
import "./UserProfileSettings.css";
import { IUserProfileSettings } from "../../../models/IUserProfileSettings";

const UserProfileSettings: React.FC = () => {
  const [formData, setFormData] = useState<IUserProfileSettings>({
    firstName: "",
    lastName: "",
    identityNumber: "",
    dateOfBirth: 0,
    mobileNumber: "",
    address: "",
    gender: "",
    email: "",
    position: "",
    dateOfEmployment: 0,
    socialSecurityNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    console.log("Profile saved:", formData);
  };

  return (
    <div className="row">
      <div className="col-md-3 border-right" style={{backgroundColor:'rgb(10, 57, 129)'}}>
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            className="rounded-circle mt-5"
            width="150px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="Profile"
          />
          <span className="font-weight-bold text-white" >Edogaru</span>
          <span className="text-white">edogaru@mail.com.my</span>
        </div>
      </div>

      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Profil Ayarları</h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <label className="labels">Adınız</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label className="labels">Soyadınız</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">T.C. No</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-12">
              <label className="labels mt-2">Doğum Tarihiniz</label>
              <input
                type="date"
                className="form-control"
                placeholder=""
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-12">
              <label className="labels mt-2">Telefon Numaranız</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-12">
              <label className="labels mt-2">Adresiniz</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-12">
              <label className="labels mt-2">Mail Adresiniz</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-12">
              <label className="labels mt-2">İşe Giriş Tarihi</label>
              <input
                type="date"
                className="form-control"
                placeholder=""
                name="dateOfEmployment"
                value={formData.dateOfEmployment}
                onChange={handleInputChange}
              />
            </div>
            
              <div className="col-md-12">
                <label className="labels mt-3">Sosyal Güvenlik No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="socialSecurityNumber"
                  value={formData.socialSecurityNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <label className="labels mt-2 ">Cinsiyet</label>
                <select style={{height:'50px'}} className="form-control mb-2" aria-label="Default select example">  
                <option >Seçiniz</option>  
            <option value="MALE">Erkek</option>  
            <option value="FEMALE">Kadın</option>
            <option value="OTHER">Diğer</option>
        </select>
              </div>
            

            <div className="col-md-12">
              <label className="labels mt-2">İş Pozisyonunuz</label>
              <select style={{height:'50px'}} className="form-control mb-2" aria-label="Default select example">  
              <option >Seçiniz</option>  
             <option value="INTERN">Intern</option>  
            <option value="JUNIOR">Junior</option>  
            <option value="MID_LEVEL">Mid_Level</option>
            <option value="SENIOR">Senior</option>
            <option value="TEAM_LEAD">Team_Lead</option>
            <option value="MANAGER">Manager</option>
            <option value="DIRECTOR">Director</option>
            <option value="NONE">None</option>
         </select>
            </div>
          </div>

          <div className="mt-5 text-center">
            <button
              className="btn btn-primary profile-button"
              type="button"
              onClick={handleSaveProfile}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
