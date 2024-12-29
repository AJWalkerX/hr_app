import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { fetchUpdateCustomer } from "../../../stores/features/companySlice";
import { IUpdateCustomerRequest } from "../../../models/Request/IUpdateCustomerRequest";

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
  onRefresh: () => void; // Yeni prop eklendi
}

function CustomerCard(props: ICustomerCard) {
  const [companyLogo, setCompanyLogo] = useState(props.companyLogo  );
  const [companyName, setCompanyName] = useState(props.companyName);
  const [companyMail, setCompanyMail] = useState(props.companyMail);
  const [companyAddress, setCompanyAddress] = useState(props.companyAddress);
  const [companyTelNo, setCompanyTelNo] = useState(props.companyTelNo || "");
  const [companyRegion, setCompanyRegion] = useState(props.companyRegion);
  const [companyType, setCompanyType] = useState(props.companyType);
  
  const dispatch = useDispatch<hrDispatch>();

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

  const handleSave = () => {
    const updatedCustomer: IUpdateCustomerRequest = {
      companyId: props.companyId,
      companyLogo,
      companyName,
      companyMail,
      companyAddress,
      companyTelNo,
      companyRegion,
      companyType,
    };
    console.log(updatedCustomer);
    dispatch(fetchUpdateCustomer(updatedCustomer)).then(() => {
      // Veriler güncellenince onRefresh fonksiyonu çağrılır
      props.onRefresh();
    });
  };
      

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={companyLogo || ""}
              alt="Company Logo"
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{props.companyName}</p>
              <p className="text-muted mb-0">{props.companyMail}</p>
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
            data-bs-target={"#customer" + props.companyId}
          >
            Edit
          </button>
        </td>
      </tr>

      {/* Modal for editing customer details */}
      <div
        className="modal fade"
        id={"customer" + props.companyId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={"customer" + props.companyId}>
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
              <input type="text" readOnly hidden value={props.companyId} />
              <label htmlFor="companyLogo" className="form-label">
                Şirket Logosu Yükleyin
              </label>
              <input
                type="file"
                className="form-control"
                id="companyLogo"
                accept="image/*"
                onChange={(e) =>
                  setCompanyLogo(URL.createObjectURL(e.target.files![0]))
                }
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Adınızı Giriniz"
                value={companyName || ""}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Mail Adresinizi Giriniz"
                value={companyMail || ""}
                onChange={(e) => setCompanyMail(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Üyelik Planınızı Giriniz"
                value={props.memberShipState || ""}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Adresinizi Giriniz"
                value={companyAddress || ""}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Telefon Numaranızı Giriniz"
                value={props.companyTelNo }
                onChange={(e) => setCompanyTelNo(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Bölgesini Giriniz"
                value={props.companyRegion || ""}
                onChange={(e) => setCompanyRegion(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Şirket Türünü Giriniz"
                value={companyType || ""}
                onChange={(e) => setCompanyType(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Ödenen Hizmet Bedelini Giriniz"
                value={props.totalPaymentAmount || ""}
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
