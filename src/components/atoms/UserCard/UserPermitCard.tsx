import React from 'react';
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';

function UserPermitCard(props: IUserPermitResponse) {
  return (
    <tr>
      <th scope="row " style={{ verticalAlign: 'middle' }}>{props.userId}</th>
      <td style={{ verticalAlign: 'middle' }}>
        <img
          src={props.avatar}
          style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          alt="Avatar"
        />
      </td>
      <td style={{ verticalAlign: 'middle' }} >
        <>{props.firstName} {props.lastName}</>
      </td>
      <td style={{ verticalAlign: 'middle' }}>{props.position}</td>
      <td style={{ verticalAlign: 'middle' }}>{props.employmentStatus}</td>
      <td style={{ verticalAlign: 'middle' }}>
        <button
        style={{color:'white'}}
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={`#user${props.userId}`}
        >
          İzin oluştur
        </button>
      </td>
    </tr>
  );
}

export default UserPermitCard;

