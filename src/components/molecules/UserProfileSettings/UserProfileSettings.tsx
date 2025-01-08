import React, { useEffect, useState } from "react";
import "./UserProfileSettings.css";
import { IUserProfileSettings } from "../../../models/IUserProfileSettings";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import {
  fetchUserProfileSettings,
  fetchUpdateProfileSettings,
} from "../../../stores/features/userPanelSlice";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const UserProfileSettings = () => {
  const profile: IUserProfileSettings | any = hrUseSelector(
    (state) => state.userpanel.userProfileSettings
  );

  const dispatch = useDispatch<hrDispatch>();
  const [isEditing, setIsEditing] = useState(false); // Düzenleme durumu
  const [updatedProfile, setUpdatedProfile] = useState(profile); // Güncellenmiş profil

  useEffect(() => {
    dispatch(fetchUserProfileSettings());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setUpdatedProfile(profile); // profile yüklendikten sonra updatedProfile'ı güncelle
    }
  }, [profile]);

  const handleEditClick = () => {
    setIsEditing(true); // Düzenleme modunu aç
  };

  const handleSaveClick = () => {
    if (updatedProfile) {
      const updatedData = {
        userId: updatedProfile.userId, // Ensure userId is included
        avatar: updatedProfile.avatar || profile?.avatar || "",
        firstName: updatedProfile.firstName || "",
        lastName: updatedProfile.lastName || "",
        identityNumber: updatedProfile.identityNumber || "",
        dateOfBirth: updatedProfile.dateOfBirth || "",
        mobileNumber: updatedProfile.mobileNumber || "",
        address: updatedProfile.address || "",
        gender: updatedProfile.gender || "",
        email: updatedProfile.email || "",
        position: updatedProfile.position || "",
        dateOfEmployment: updatedProfile.dateOfEmployment || "",
        socialSecurityNumber: updatedProfile.socialSecurityNumber || "",
      };

      dispatch(fetchUpdateProfileSettings(updatedData));

      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Profil bilgileriniz başarıyla güncellendi.",
      });
      setIsEditing(false); // Düzenleme modunu kapat
    }
  };
  const handleCancelClick = () => {
    setUpdatedProfile(profile); // Değişiklikleri iptal et ve eski profile'ı geri yükle
    setIsEditing(false); // Düzenleme modunu kapat
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProfile((prevState: IUserProfileSettings) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="row">
      <div className="col-md-5 border-right">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            className="rounded-circle"
            width="150px"
            height="150px"
            src={profile?.avatar}
            alt="Profile"
          />
          <input type="text" hidden readOnly value={profile?.userId} />

          <span className="font-weight-bold text-white">
            <input
              style={{
                border: "none",
                textAlign: "center",
                fontWeight: "bold",
              }}
              type="text"
              value={`${profile?.firstName || ""} ${profile?.lastName || ""}`}
              readOnly
              name="fullName"
              onChange={handleInputChange}
            />
          </span>
        </div>

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
                value={updatedProfile?.firstName || ""}
                readOnly
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
                value={updatedProfile?.lastName || ""}
                readOnly
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
                value={updatedProfile?.identityNumber || ""}
                readOnly
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
                value={updatedProfile?.dateOfBirth || ""}
                readOnly
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
                value={updatedProfile?.mobileNumber || ""}
                readOnly={!isEditing}
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
                value={updatedProfile?.address || ""}
                readOnly={!isEditing}
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
                value={updatedProfile?.email || ""}
                readOnly={!isEditing}
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
                value={updatedProfile?.dateOfEmployment || ""}
                readOnly
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
                value={updatedProfile?.socialSecurityNumber || ""}
                readOnly
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-12">
              <label className="labels mt-2 ">Cinsiyet</label>
              <input
                style={{ height: "50px" }}
                className="form-control mb-2 "
                type="text"
                placeholder="Posizyonunuz"
                name="gender"
                value={updatedProfile?.gender || ""}
                readOnly
                onChange={handleInputChange}
              />
            </div>

            <div className="col-md-12">
              <label className="labels mt-2">İş Pozisyonunuz</label>
              <input
                style={{ height: "50px" }}
                className="form-control mb-2 "
                type="text"
                placeholder="Posizyonunuz"
                name="position"
                value={updatedProfile?.position || ""}
                readOnly
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <NavLink
              to="/set-new-password"
              className="btn btn-primary profile-button"
            >
              Sifremi degistir
            </NavLink>
            {!isEditing ? (
              <button
                className="btn btn-primary profile-button ms-2"
                type="button"
                onClick={handleEditClick}
              >
                Düzenle
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary profile-button profile-btn-wide"
                  type="button"
                  onClick={handleSaveClick}
                >
                  Kaydet
                </button>
                <button
                  className="btn btn-secondary profile-button profile-btn-wide"
                  type="button"
                  onClick={handleCancelClick}
                >
                  İptal
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
