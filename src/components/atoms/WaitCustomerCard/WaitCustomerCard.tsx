import React from 'react'

interface IWaitCustomerCard{
    Avatar: string,
    Name: string,
    Email: string,
    Status: string,	
    
}

function WaitCustomerCard(props: IWaitCustomerCard) {
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
      <td>{props.Status}</td>
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