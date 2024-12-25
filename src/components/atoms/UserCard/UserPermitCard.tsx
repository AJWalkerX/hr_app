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
      <td style={{ verticalAlign: 'middle' }}>{props.beginDate}</td>
      <td style={{ verticalAlign: 'middle' }}>{props.endDate}</td>
      <td style={{ verticalAlign: 'middle' }}>{props.description}</td>

      <td style={{ verticalAlign: 'middle' }}>{props.holidayType}</td>
      <td style={{ verticalAlign: 'middle' }}>{props.holidayState}</td>

      <td style={{ verticalAlign: 'middle' }}>
        <button
        style={{color:'white'}}
          type="button"
          className="btn btn-success"
          data-bs-target={`#user${props.userId}`}
        >
          Accept
        </button>
        <button
        style={{color:'white'}}
          type="button"
          className="btn btn-danger ms-3"
          data-bs-target={`#user${props.userId}`}
        >
         Denied
        </button>
      </td>
    </tr>
  );
}

export default UserPermitCard;

