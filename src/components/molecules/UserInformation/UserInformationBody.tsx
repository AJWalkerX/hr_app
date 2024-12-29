import React, { useEffect } from "react";
import UserInformationButton from "../../atoms/UserInformation/UserInformationButton";
import { IUserProfileSettings } from "../../../models/IUserProfileSettings";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchUserProfileSettings } from "../../../stores/features/userPanelSlice";

function UserInformationBody() {

  const profile: IUserProfileSettings | any= hrUseSelector(state=> state.userpanel.userProfileSettings);
  
  const dispatch = useDispatch<hrDispatch>();
  useEffect(()=>{
      dispatch(fetchUserProfileSettings())
      
  },[]);

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
          value={profile?.firstName || ''}
          readOnly
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Soyadınız"
          name="lastName"
          value={profile?.lastName || ''}
          readOnly
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="TC No"
        />
        <span>Doğum Tarihinizi Giriniz:</span>
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="date"
          
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Telefon Numaranız"
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Adresiniz"
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="email"
          placeholder="Mail Adresiniz"
          name="email"
           value={profile?.email || ''}
               
        />

        <select
          style={{ height: "50px" }}
          className="form-select mb-2"
          aria-label="Default select example"
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
          value={profile?.companyName || ''}
          
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Mail Adresi"
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Telefon Numarası"
        />
        <input
          style={{ height: "50px" }}
          className="form-control mb-2 "
          type="text"
          placeholder="Şirket Adresi"
        />
        <select
          style={{ height: "50px" }}
          className="form-select mb-2"
          aria-label="Default select example"
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
          />
          
          <span>Çalışmaya Başlama Tarihinizi seçiniz:</span>
            <input
              style={{ height: "50px" }}
              className="form-control mb-2 "
              type="date"
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
          <UserInformationButton />
        </div>
      </div>
    </>
  );
}

export default UserInformationBody;
