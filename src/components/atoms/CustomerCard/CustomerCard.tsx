import React from "react";

interface ICustomerCard {
  companyLogo: string;
  companyName: string;
  companyMail: string;
  totalPaymentAmount: string;
  memberShipState: string;
}

function CustomerCard(props: ICustomerCard) {
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
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={props.companyLogo}
              alt=""
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
            data-bs-target="#customerEdit"
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
                Sifre Sifirlama
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Mail Adresinizi Giriniz"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
              <button type="button" className="btn btn-primary">
                Gonder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerCard;
