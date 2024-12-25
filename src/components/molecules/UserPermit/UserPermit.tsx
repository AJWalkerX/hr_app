import React, { useEffect } from 'react';
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';
import { hrDispatch, hrUseSelector } from '../../../stores';
import { useDispatch } from 'react-redux';
import { fetchGetUserPermitInfo } from '../../../stores/features/userPanelSlice';
import UserPermitCard from '../../atoms/UserCard/UserPermitCard';
import permitLogo from '../../../img/permitlogo.png'

function UserPermit() {
  const userPermitCardList: IUserPermitResponse[] = hrUseSelector(
    state => state.userpanel.userPermitCardList
  );
  const dispatch = useDispatch<hrDispatch>();

  useEffect(() => {
    dispatch(fetchGetUserPermitInfo());
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
      <img src={permitLogo} style={{width:'300px',height:'250px'}} />
        <h1>İzin Yönetim Paneli</h1>
      </div>
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Personel</th>
            <th scope="col">Departman</th>
            <th scope="col">İzin Başlangıç Tarihi</th>
            <th scope="col">İzin Bitiş Tarihi</th>
            <th scope="col">Açıklama</th>
            <th scope="col">İzin Durumu</th>
            <th scope="col">İzin Değerlendirme Durumu</th>
          </tr>
        </thead>
        <tbody>
          {userPermitCardList.map(user => (
            <UserPermitCard
              key={user.userId}
              userId={user.userId}
              avatar={user.avatar}
              firstName={user.firstName}
              lastName={user.lastName}
              position={user.position}
              employmentStatus={user.employmentStatus}
              description={user.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPermit;