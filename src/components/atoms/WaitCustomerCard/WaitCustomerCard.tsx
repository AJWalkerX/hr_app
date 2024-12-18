import React from 'react'

interface IWaitCustomerCard{

    Name: string,
    Surname: string,
    Email: string,
    Position: string,
    CompanyName: string

    
}

function WaitCustomerCard(props: IWaitCustomerCard) {
  return (
    <>
        <tr>
      <td>
        <div className="d-flex align-items-center">
          <div className="ms-3">
            <p className="fw-bold mb-1">{props.Name} {props.Surname}</p>
            <p className="text-muted mb-0">{props.Email}</p>
          </div>
        </div>
      </td>

      <td>
        <div>
          
          <p>{props.CompanyName} / {props.Position} </p>
        </div>
      </td>

      <td>
      <div className="d-flex">
        <button type="button" className="btn btn-success btn-sm btn-rounded border text-white me-1">
          Accept
        </button>
        <button type="button" className="btn btn-danger btn-sm btn-rounded text-white border">
          Denied
        </button>
      </div>
    </td>
    </tr>
    </>
  )
}

export default WaitCustomerCard