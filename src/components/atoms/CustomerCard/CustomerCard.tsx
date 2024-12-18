import React from 'react'

interface ICustomerCard{
    CompanyLogo: string,
    CompanyName: string,
    CompanyMail: string,
    Balance: string,
    Status: string,	
    
}

function CustomerCard(props: ICustomerCard) {
  return (
    <>
        <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src= {props.CompanyLogo}
              alt=""
              style={{width: "45px", height: "45px"}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">{props.CompanyName}</p>
            <p className="text-muted mb-0">{props.CompanyMail}</p>
          </div>
        </div>
      </td>
      <td style={{paddingLeft:'60px'}}>
        ${props.Balance}
      </td>
      <td>{props.Status}</td>
      <td>
        <button type="button" className="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td>
    </tr>
    </>
  )
}

export default CustomerCard