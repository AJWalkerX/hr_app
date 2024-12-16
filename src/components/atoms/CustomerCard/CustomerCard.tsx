import React from 'react'

interface ICustomerCard{
    Avatar: string,
    Name: string,
    Email: string,
    Plan: string,	
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
              src= {props.Avatar}
              alt=""
              style={{width: "45px", height: "45px"}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">{props.Name}</p>
            <p className="text-muted mb-0">{props.Email}</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">{props.Plan}</p>
      </td>
      <td>
        {props.Balance}
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