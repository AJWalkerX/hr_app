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
  const [avatar,setAvatar] = useState("");
  const [companyLogo,setCompanyLogo]= useState("")

  const [isValidUrl, setIsValidUrl] = useState(true); // URL'nin geçerli olup olmadığını kontrol etmek için
  
 
  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fetchUserProfileSettings());
  }, []);
  const handleClick = () => {
    const employeeDetails: IFirstUpdateManagerRequest = {
      token: "", // add a token value here
      avatar, // add an avatar value here
      companyLogo ,
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
  };
  useEffect(() => {
    if (isFistUpdateManagerSuccess) {
      navigate("/manager");
    }
  }, [isFistUpdateManagerSuccess, navigate]);

  const handleAvatarUrlChange = (e:any) => {
    const url = e.target.value;
    setAvatar(url);
    

    // URL geçerli mi kontrol et
    try {
      new URL(url);
      setIsValidUrl(true);
    } catch (error) {
      setIsValidUrl(false);
    }
  };

  const handleCompanyUrlChange = (e:any) => {
    const url = e.target.value;
    setCompanyLogo(url);
    

    // URL geçerli mi kontrol et
    try {
      new URL(url);
      setIsValidUrl(true);
    } catch (error) {
      setIsValidUrl(false);
    }
  };
  return (
    <>
      <div className="col-4">
        <h2
          className="mt-5"
          style={{
            color: "rgb(10, 57, 129)",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Kişisel Bilgiler
        </h2>
        <div className="input-group mb-3 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Adınız"
            name="firstName"
            value={profile?.firstName || ""}
            readOnly
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Soyadınız"
            name="lastName"
            value={profile?.lastName || ""}
            readOnly
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="identityNumber No"
            value={identityNumber}
            onChange={(e) => setTc(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <span>Doğum Tarihinizi Giriniz:</span>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="date"
            value={dateOfBirth.toISOString().split("T")[0]}
            onChange={(e) => setDob(new Date(e.target.value))}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Telefon Numaranız"
            value={mobileNumber}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Adresiniz"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Mail Adresiniz"
            name="email"
            value={profile?.email || ""}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>

        <select
          className="form-select mb-3"
          aria-label="Cinsiyet Seçiniz"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{
            height: "50px",
            borderRadius: "10px",
            borderColor: "#004aad",
          }}
        >
          <option selected>Cinsiyetiniz</option>
          <option value="MALE">Erkek</option>
          <option value="FEMALE">Kadın</option>
          <option value="OTHER">Belirtmek İstemiyorum</option>
        </select>

        <div>
      <label htmlFor="photoUrl"
      style={{
        fontSize: "20px",
        color: "rgb(10, 57, 129)",
        border: "none",
      }}
      >Fotoğraf URL'si:</label>
      <input
        className="form-control mb-2 mt-2"
        type="text"
        id="avatar"
        placeholder="Fotoğraf URL'sini girin"
        value={avatar}
        onChange={handleAvatarUrlChange}
        style={{
          height: "50px",
          borderRadius: "10px",
          borderColor: "#004aad",
        }}
      />
      {!isValidUrl && <p style={{ color: "red" }}>Geçerli bir URL girin.</p>}

      {isValidUrl && avatar && (
        <div>
          <p>Fotoğraf Önizlemesi:</p>
          <img
            src={avatar}
            alt="Fotoğraf Önizlemesi"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}
    </div>

      </div>

    

      <div className="col-4">
        <h2
          className="mt-5 ms-4"
          style={{
            color: "rgb(10, 57, 129)",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Şirket Bilgileri
        </h2>
        <div className="input-group mb-3 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Şirket Adı"
            name="companyName"
            value={profile?.companyName || ""}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Şirket Mail Adresi"
            value={companyMail}
            onChange={(e) => setCompanyEmail(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Şirket Telefon Numarası"
            value={telNo}
            onChange={(e) => setCompanyPhone(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Şirket Adresi"
            value={companyAddress}
            onChange={(e) => setCompanyAddress(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <select
          className="form-select mb-3"
          aria-label="Sektörünüz"
          value={companyType}
          onChange={(e) => setCompanyType(e.target.value)}
          style={{
            height: "50px",
            borderRadius: "10px",
            borderColor: "#004aad",
          }}
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
          <option value="FASHION_AND_TEXTILE">Moda ve Tekstil</option>
          <option value="UNKNOWN">Diğer</option>
        </select>
        <select
          className="form-select mb-3"
          aria-label="Ülkeniz"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={{
            height: "50px",
            borderRadius: "10px",
            borderColor: "#004aad",
          }}
        >
          <option selected>Ülkeniz</option>
          <option value="TURKEY">Türkiye</option>
        </select>
        <div>
      <label htmlFor="photoUrl"
      style={{
        fontSize: "20px",
        color: "rgb(10, 57, 129)",
        border: "none",
      }}
      >Şirket Logo URL'si:</label>
      <input
        className="form-control mb-2 mt-2"
        type="text"
        id="companyLogo"
        placeholder="Fotoğraf URL'sini girin"
        value={companyLogo}
        onChange={handleCompanyUrlChange}
        style={{
          height: "50px",
          borderRadius: "10px",
          borderColor: "#004aad",
        }}
      />
      {!isValidUrl && <p style={{ color: "red" }}>Geçerli bir URL girin.</p>}

      {isValidUrl && companyLogo && (
        <div>
          <p>Logo Önizlemesi:</p>
          <img
            src={companyLogo}
            alt="Fotoğraf Önizlemesi"
            style={{
              maxWidth: "300px",
              maxHeight: "300px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      )}
    </div>
      </div>
      
      

      <div className="col-4">
        <h2
          className="mt-5 ms-4"
          style={{
            color: "rgb(10, 57, 129)",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Kariyer Bilgileri
        </h2>
        <div className="input-group mb-3 mt-4">
          <input
            className="form-control"
            type="text"
            placeholder="Sosyal Güvenlik Numaranız"
            value={socialSecurityNumber}
            onChange={(e) => setSocialSecNum(e.target.value)}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <span>Çalışmaya Başlama Tarihinizi seçiniz:</span>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="date"
            value={dateOfEmployment.toISOString().split("T")[0]}
            onChange={(e) => setDoe(new Date(e.target.value))}
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Pozisyonunuz"
            name="position"
            value={profile?.position}
            readOnly
            style={{
              height: "50px",
              borderRadius: "10px",
              borderColor: "#004aad",
            }}
          />
        </div>

        <div className="row me-5">
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary ms-5 saveButton rounded-5"
              onClick={handleClick}
              style={{
                borderRadius: "5px",
                padding: "10px 20px",
                fontWeight: "bold",
              }}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformationBody;
