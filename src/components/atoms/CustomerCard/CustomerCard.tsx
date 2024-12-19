import React from "react";

interface ICustomerCard {
  companyLogo: string;
  companyName: string;
  companyMail: string;
  totalPaymentAmount: string;
  memberShipState: string;
}

function CustomerCard(props: ICustomerCard) {
  const getButtonClass = (state: string) =>{
    switch(state){
      case "ACTIVE": return "btn btn-outline-success rounded-5";
      case "INACTIVE": return"btn btn-outline-warning rounded-5";
      case "PAUSED": return"btn btn-outline-danger rounded-5";
      case "NONE": return"btn btn-outline-secondary rounded-5";
      default : return"btn btn-outline-secondary rounded-5";

    }
  }
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
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            Edit
          </button>
        </td>
      </tr>
    </>
  );
}

export default CustomerCard;
