import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PermitRequest from "../../molecules/PermitRequest/PermitRequest";
import permitLogo from "../../../img/permit-logo.png";
import "./PermitRequestOrganism.css";
import { fetchUserPermitCreate } from "../../../stores/features/userPanelSlice";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { IUserPermitRequest } from "../../../models/Request/IUserPermitRequest";
import Swal from "sweetalert2";

function PermitRequestOrganism() {
  const [isPermitRequestVisible, setPermitRequestVisible] = useState(false);
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [holidayType, setHolidayType] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch<hrDispatch>();

  const { isUserCreatePermitLoading, userCreatePermit } = hrUseSelector(
    (state) => state.userpanel
  );

  const handleButtonClick = () => {
    setPermitRequestVisible(!isPermitRequestVisible);
  };

  const handleIzinTipiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHolidayType(event.target.value);
  };

  const handleFormSubmit = () => {
    const beginDate = new Date();
    const endDate = new Date();

    if (beginDate >= endDate) {
      Swal.fire({
        title: "Hata!",
        text: "Başlangıç tarihi, bitiş tarihinden önce olmalıdır.",
        icon: "error",
      });
      return; // Formu göndermeyi engelle
    }
  
    // Tarihlerin boş olmaması gerektiğini kontrol et
    if (!beginDate || !endDate) {
      Swal.fire({
        title: "Hata!",
        text: "Başlangıç tarihi ve bitiş tarihi boş olamaz.",
        icon: "error",
      });
      return; // Formu göndermeyi engelle
    }
  
    // Geçmiş tarihlere izin verilmemesi durumunda kontrol
    const today = new Date();
    if (beginDate < today || endDate < today) {
      Swal.fire({
        title: "Hata!",
        text: "Tarih aralığı geçmişte olamaz.",
        icon: "error",
      });
      return; // Formu göndermeyi engelle
    }
  

    const permitRequest: IUserPermitRequest = {
      beginDate,
      endDate,
      holidayType,
      description,
    };

    // İzin isteğini oluştur
    dispatch(fetchUserPermitCreate(permitRequest))
      .then(() => {
        // Başarılı işlem sonrası SweetAlert bildirimi
        Swal.fire({
          title: "İzin Talebiniz Oluşturuldu",
          icon: "success",
        });
      })
      .catch((error) => {
        // Hata durumunda başka bir mesaj gösterebilirsiniz
        Swal.fire({
          title: "Hata!",
          text: "İzin oluşturulurken bir sorun oluştu.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="row justify-content-center">
        <img
          src={permitLogo}
          style={{ width: "300px", height: "250px" }}
          alt="Permit Logo"
        />
      </div>

      <div className="row mb-4">
        <h1 className="text-center mt-5">İzin İstek Talep Formu</h1>
        <h6 className="text-center mt-3">
          İzin talebinde bulunmak için lütfen aşağıdaki bilgileri doldurunuz...
        </h6>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <form className="form-container">
              <div className="form-group">
                <label>İzin Başlangıç Tarihi:</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>İzin Bitiş Tarihi:</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>İzin Tipi:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="ANNUAL_LEAVE"
                      checked={holidayType === "ANNUAL_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Yıllık İzin
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="SICK_LEAVE"
                      checked={holidayType === "SICK_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Hastalık
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="CASUAL_LEAVE"
                      checked={holidayType === "CASUAL_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Mazeret İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="MATERNITY_LEAVE"
                      checked={holidayType === "MATERNITY_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Doğum İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="PATERNITY_LEAVE"
                      checked={holidayType === "PATERNITY_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Babalık İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="PUBLIC_HOLIDAY"
                      checked={holidayType === "PUBLIC_HOLIDAY"}
                      onChange={handleIzinTipiChange}
                    />
                    Telafi İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="RELIGIOUS_HOLIDAY"
                      checked={holidayType === "RELIGIOUS_HOLIDAY"}
                      onChange={handleIzinTipiChange}
                    />
                    Ücretsiz İzin
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="STUDY_LEAVE"
                      checked={holidayType === "STUDY_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Eğitim İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="EMERGENCY_LEAVE"
                      checked={holidayType === "EMERGENCY_LEAVE"}
                      onChange={handleIzinTipiChange}
                    />
                    Acil Durum İzni
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="izinTipi"
                      value="OTHER"
                      checked={holidayType === "OTHER"}
                      onChange={handleIzinTipiChange}
                    />
                    Diğer
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Açıklama:</label>
                <textarea
                  placeholder="Açıklamanızı yazın..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <button
            style={{
              color: "white",
              width: "150px",
              borderRadius: "30px",
              marginLeft: "1100px",
            }}
            type="button"
            className="btn btn-success"
            onClick={handleFormSubmit}
            disabled={isUserCreatePermitLoading}
          >
            {isUserCreatePermitLoading
              ? "İzin Oluşturuluyor..."
              : "İzin Oluştur"}
          </button>
        </div>
      </div>
    </>
  );
}

export default PermitRequestOrganism;
