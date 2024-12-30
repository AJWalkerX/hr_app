import React from 'react'
import UserPermitCard from '../../atoms/UserCard/UserPermitCard'
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';
import { hrUseSelector } from '../../../stores';

function ViewYourPermit() {
  return (
    <div style={{ backgroundColor: "#e5e8e8" }} className="container">
    <div className="text-center mb-4">
      <h1>İzin Durumları</h1>
    </div>
    <table className="table table-striped table-hover text-center">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
         
          <th scope="col">İzin Başlangıç Tarihi</th>
          <th scope="col">İzin Bitiş Tarihi</th>
          <th scope="col">Açıklama</th>
          <th scope="col">İzin Türü</th>
          <th scope="col">İzin Durumu</th>
          
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  )
}

export default ViewYourPermit