import React from 'react';
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';

function UserPermitCard(props: IUserPermitResponse) {
  return (
    <tr>
      <th scope="row">{props.userId}</th>
      <td>
        <img
          src={props.avatar}
          style={{ width: '50px', borderRadius: '50%' }}
          alt="Avatar"
        />
      </td>
      <td>
        <p>{props.firstName} {props.lastName}</p>
      </td>
      <td>{props.position}</td>
      <td>{props.employmentStatus}</td>
      <td>
        <button
          type="button"
          className="btn btn-link btn-sm btn-rounded"
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

