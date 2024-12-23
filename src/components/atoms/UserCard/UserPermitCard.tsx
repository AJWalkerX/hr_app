import React from 'react';
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';

function UserPermitCard(props: IUserPermitResponse) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Personel</th>
            <th scope="col">Departman</th>
            <th scope="col">Çalışma Durumu</th>
            <th scope="col">Düzenleme</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src={props.avatar}  style={{ width: '50px', borderRadius: '50%' }} />
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
        </tbody>
      </table>
    </>
  );
}

export default UserPermitCard;
