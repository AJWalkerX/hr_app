import React, { useEffect, useState } from "react";
import UserInformationButton from "../../atoms/UserInformation/UserInformationButton";
import { IUserProfileSettings } from "../../../models/IUserProfileSettings";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchUserProfileSettings } from "../../../stores/features/userPanelSlice";
import { fetchUpdateEmployeeDetails } from "../../../stores/features/managerPanelSlice";
import { IFirstUpdateManagerRequest } from "../../../models/Request/IFirstUpdateManagerRequest";
import { useNavigate } from "react-router-dom";
import "./UserInformationBody.css";

function UserInformationBody() {
  const navigate = useNavigate();
  const profile: IUserProfileSettings | any = hrUseSelector(
    (state) => state.userpanel.userProfileSettings
  );

  const isFistUpdateManagerSuccess = hrUseSelector(
    (state) => state.manager.isFistUpdateManagerSuccess
  );

  const [identityNumber, setTc] = useState("");
  const [dateOfBirth, setDob] = useState(new Date());
  const [mobileNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfEmployment, setDoe] = useState(new Date());
  const [socialSecurityNumber, setSocialSecNum] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [region, setRegion] = useState("");
  const [companyMail, setCompanyEmail] = useState("");
  const [telNo, setCompanyPhone] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");

  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fetchUserProfileSettings());
  }, []);
  const handleClick = () => {
    const employeeDetails: IFirstUpdateManagerRequest = {
      token: "", // add a token value here
      avatar: "", // add an avatar value here
      companyLogo: "",
      identityNumber,
      dateOfBirth,
      mobileNumber,
      address,
      gender,
      dateOfEmployment,
      socialSecurityNumber,
      companyType,
      region,
      companyMail,
      telNo,
      companyAddress,
    };
    dispatch(fetchUpdateEmployeeDetails(employeeDetails));
    if (isFistUpdateManagerSuccess) {
      navigate("/manager");
    }
  };
  return (
    <>
      <div className="col-4">
        <h2 className="mt-5" style={{ color: "#006ea6" }}>
          Kişisel Bilgiler
        </h2>
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 mt-5"
          type="text"
          placeholder="Adınız"
          name="firstName"
          value={profile?.firstName || ""}
          readOnly
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Soyadınız"
          name="lastName"
          value={profile?.lastName || ""}
          readOnly
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="identityNumber No"
          value={identityNumber}
          onChange={(e) => setTc(e.target.value)}
        />
        <span>Doğum Tarihinizi Giriniz:</span>
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="date"
          value={dateOfBirth.toISOString().split("T")[0]}
          onChange={(e) => setDob(new Date(e.target.value))}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Telefon Numaranız"
          value={mobileNumber}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Adresiniz"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="email"
          placeholder="Mail Adresiniz"
          name="email"
          value={profile?.email || ""}
        />

        <select
          style={{ height: "50px" }}
          className="form-select mb-2"
          aria-label="Default select example"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option selected>Cinsiyetiniz</option>
          <option value="MALE">Erkek</option>
          <option value="FEMALE">Kadın</option>
          <option value="OTHER">Belirtmek İstemiyorum</option>
        </select>
      </div>
      <div className="col-4">
        <h2 className="mt-5 ms-4 " style={{ color: "#006ea6" }}>
          Şirket Bilgileri
        </h2>
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 mt-5 "
          type="text"
          placeholder="Şirket Adı"
          name="companyName"
          value={profile?.companyName || ""}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Mail Adresi"
          value={companyMail}
          onChange={(e) => setCompanyEmail(e.target.value)}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Telefon Numarası"
          value={telNo}
          onChange={(e) => setCompanyPhone(e.target.value)}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Adresi"
          value={companyAddress}
          onChange={(e) => setCompanyAddress(e.target.value)}
        />
        <select
          style={{ height: "50px" }}
          className="form-select mb-2"
          aria-label="Default select example"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
        >
          <option selected>Sektörünüz</option>
          <option value="TECHNOLOGY">Teknoloji</option>
          <option value="HEALTHCARE">Sağlık</option>
          <option value="CONSTRUCTION">İnşaat</option>
          <option value="FINANCE">Finans</option>
          <option value="ENERGY">Enerji</option>
          <option value="TOURISM">Turizm</option>
          <option value="MEDIA_AND_ENTERTAINMENT">Medya ve Eğlence</option>
          <option value="EDUCATION">Eğitim</option>
          <option value="FOOD">Gıda</option>
          <option value="AUTOMOTIVE">Otomotiv</option>
          <option value="FASHION_AND_TEXTILE">Moda Ve Tekstil</option>
          <option value="UNKNOWN">Diğer</option>
        </select>
        <select
          style={{ height: "50px" }}
          className="form-select mb-2"
          aria-label="Default select example"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option selected>Ülkeniz</option>
          <option value="TURKEY">Türkiye</option>
        </select>
        <div className=" mt-3">
          <p
            className="ms-2 mt-5"
            style={{ fontSize: "20px", color: "#006ea6", border: "none" }}
          >
            Şirket Logosu:
          </p>
          <input
            className="form-control mb-2 mt-2"
            type="file"
            accept="image/*"
          />
        </div>
      </div>
      <div className="col-4">
        <h2 className="mt-5 ms-4 " style={{ color: "#006ea6" }}>
          Kariyer Bilgileri
        </h2>

        <input
          style={{ height: "50px" }}
          className="form-control mb-2 mt-5"
          type="text"
          placeholder="Sosyal Güvenlik Numaranız"
          value={socialSecurityNumber}
          onChange={(e) => setSocialSecNum(e.target.value)}
        />

        <span>Çalışmaya Başlama Tarihinizi seçiniz:</span>
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="date"
          value={dateOfEmployment.toISOString().split("T")[0]}
          onChange={(e) => setDoe(new Date(e.target.value))}
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Posizyonunuz"
          name="position"
          value={profile?.position}
          readOnly
        />

        <div className="row me-5  ">
          <div className="d-flex justify-content-center">
            <button className=" ms-5 saveButton" onClick={handleClick}>
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformationBody;
