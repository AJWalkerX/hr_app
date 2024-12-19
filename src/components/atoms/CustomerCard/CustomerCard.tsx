import React from "react";

interface ICustomerCard {
  companyLogo: string;
  companyName: string;
  companyMail: string;
  totalPaymentAmount: string;
  memberShipState: string;
}

function CustomerCard(props: ICustomerCard) {
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
          <button className="btn btn-outline-success rounded-5" disabled>
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
