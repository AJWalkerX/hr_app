import React from 'react'

function ManagerEmployeeSpendingCard() {
    return (
        <tr>
          <th scope="row " style={{ verticalAlign: "middle" }}>
            1
          </th>
          <td style={{ verticalAlign: "middle" }}>
            <img
              src="https://picsum.photos/40/40"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              alt="Avatar"
            />
          </td>
          <td style={{ verticalAlign: "middle" }}>
            <>
              Ahmet Amca
            </>
          </td>
          <td style={{ verticalAlign: "middle" }}>Müdür</td>
          <td style={{ verticalAlign: "middle" }}>
            {" "}
            02.02.2025
          </td>
          <td style={{ verticalAlign: "middle" }}>açıklama</td>
    
          <td style={{ verticalAlign: "middle" }}>harcama tür</td>
    
          <td style={{ verticalAlign: "middle" }}>
            <button
              style={{ color: "white" }}
              type="button"
              className="btn btn-success"
              data-bs-target=""
              
            >
              Accept
            </button>
            <button
              style={{ color: "white" }}
              type="button"
              className="btn btn-danger ms-3"
              data-bs-target=""
             
            >
              Denied
            </button>
          </td>
        </tr>
      );
}

export default ManagerEmployeeSpendingCard