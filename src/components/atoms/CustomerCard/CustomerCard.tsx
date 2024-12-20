import React, { useEffect, useState } from "react";
import { ICustomers } from "../../../models/ICustomers";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchUpdateCustomer } from "../../../stores/features/adminPanelSlice";
import { IUpdateCustomerRequest } from "../../../models/IUpdateCustomerRequest";

interface ICustomerCard {
  companyId: number;
  companyLogo: string;
  companyName: string;
  companyMail: string;
  memberShipState: string;
  companyAddress: string;
  companyTelNo: string;
  companyType: string;
  companyRegion: string;
  totalPaymentAmount: string;

}

function CustomerCard(props: ICustomerCard) {
  
   // Redux customer state
   const customer = hrUseSelector((state) => state.adminpanel.customer);
   const dispatch = useDispatch<hrDispatch>();
 
   useEffect(() => {
     if (customer) {
       // Sadece customer varsa update işlemi başlatılır
       const payload: IUpdateCustomerRequest = {
            companyId: customer.companyId,
            companyLogo: customer.companyLogo,
            companyName:customer.companyName,
            companyMail: customer.companyMail,
            companyAddress : customer.companyAddress,
            telNo: customer.companyTelNo,
            companyType: customer.companyType,
            region: customer.companyRegion,
            memberType: customer.memberShipState
       };
       dispatch(fetchUpdateCustomer(payload));
     }
   }, [customer, dispatch]);



  const [companyName, setCompanyName] = useState(props.companyName);
  const [companyMail, setCompanyMail] = useState(props.companyMail);
  const [companyAddress, setCompanyAddress] = useState(props.companyAddress);
  const [companyTelNo, setCompanyTelNo] = useState(props.companyTelNo);
  const [companyType, setCompanyType] = useState(props.companyType);
  const [companyRegion, setCompanyRegion] = useState(props.companyRegion);
  const [companyLogo, setCompanyLogo] = useState(props.companyLogo);

  // Geçici state'ler (modal için)
  const [tempCompanyName, setTempCompanyName] = useState(companyName);
  const [tempCompanyMail, setTempCompanyMail] = useState(companyMail);
  const [tempCompanyAddress, setTempCompanyAddress] = useState(companyAddress);
  const [tempCompanyTelNo, setTempCompanyTelNo] = useState(companyTelNo);
  const [tempCompanyType, setTempCompanyType] = useState(companyType);
  const [tempCompanyRegion, setTempCompanyRegion] = useState(companyRegion);
  const [tempCompanyLogo, setTempCompanyLogo] = useState(companyLogo);

  const getButtonClass = (state: string) => {
    switch (state) {
      case "ACTIVE":
        return "btn btn-outline-success rounded-5";
      case "INACTIVE":
        return "btn btn-outline-warning rounded-5";
      case "PAUSED":
        return "btn btn-outline-danger rounded-5";
      case "NONE":
        return "btn btn-outline-secondary rounded-5";
      default:
        return "btn btn-outline-secondary rounded-5";
    }
  };

  // Modal açıldığında geçici state'leri sıfırla
  const handleModalOpen = () => {
    setTempCompanyName(companyName);
    setTempCompanyMail(companyMail);
    setTempCompanyAddress(companyAddress);
    setTempCompanyTelNo(companyTelNo);
    setTempCompanyType(companyType);
    setTempCompanyRegion(companyRegion);
    setTempCompanyLogo(companyLogo);
  };

  const handleSave = () => {
    // Geçici state'lerdeki değerleri ana state'lere aktar
    setCompanyName(tempCompanyName);
    setCompanyMail(tempCompanyMail);
    setCompanyAddress(tempCompanyAddress);
    setCompanyTelNo(tempCompanyTelNo);
    setCompanyType(tempCompanyType);
    setCompanyRegion(tempCompanyRegion);
    setCompanyLogo(tempCompanyLogo);

    console.log("Veriler kaydedildi:", {
      companyName: tempCompanyName,
      companyMail: tempCompanyMail,
      companyAddress: tempCompanyAddress,
      companyTelNo: tempCompanyTelNo,
      companyType: tempCompanyType,
      companyRegion: tempCompanyRegion,
      companyLogo: tempCompanyLogo,
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={companyLogo}
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{companyName}</p>
              <p className="text-muted mb-0">{companyMail}</p>
            </div>
          </div>
        </td>
        <td style={{ paddingLeft: "60px" }}>${props.totalPaymentAmount}</td>
        <td>
          <button className={getButtonClass(props.memberShipState)} disabled>
            {props.memberShipState}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-link btn-sm btn-rounded"
            data-bs-toggle="modal"
            data-bs-target="#customerEdit"
            onClick={handleModalOpen}
          >
            Edit
          </button>
        </td>
      </tr>

      <div
        className="modal fade"
        id="customerEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="customerEdit">
                Şirket Bilgileri Güncelleme
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="companyLogo" className="form-label">
                Şirket Logosu Yükleyin
              </label>
              <input
                type="file"
                className="form-control"
                id="companyLogo"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  if (file) {
                    setTempCompanyLogo(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Adınızı Giriniz"
                value={tempCompanyName}
                onChange={(e) => setTempCompanyName(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Mail Adresinizi Giriniz"
                value={tempCompanyMail}
                onChange={(e) => setTempCompanyMail(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Üyelik Planınızı Giriniz"
                value={props.memberShipState}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Adresinizi Giriniz"
                value={tempCompanyAddress}
                onChange={(e) => setTempCompanyAddress(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Telefon Numaranızı Giriniz"
                value={tempCompanyTelNo}
                onChange={(e) => setTempCompanyTelNo(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Bölgesini Giriniz"
                value={tempCompanyRegion}
                onChange={(e) => setTempCompanyRegion(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Türünü Giriniz"
                value={tempCompanyType}
                onChange={(e) => setTempCompanyType(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Ödenen Hizmet Bedelini Giriniz"
                value={props.totalPaymentAmount}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                İptal
              </button>
              <button
                type="button"
                className="btn btn-success"
                style={{ color: "white" }}
                data-bs-dismiss="modal"
                onClick={handleSave}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerCard;