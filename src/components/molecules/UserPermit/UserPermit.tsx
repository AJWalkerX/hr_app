import React, { useEffect } from "react";
import { IUserPermitResponse } from "../../../models/Response/IUserPermitResponse";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchGetUserPermitInfo } from "../../../stores/features/managerPanelSlice";
import UserPermitCard from "../../atoms/UserCard/UserPermitCard";

function UserPermit() {
  const isEmpty = hrUseSelector((state) => state.manager.isPermitListEmpty);
  const userPermitCardList: IUserPermitResponse[] = hrUseSelector(
    (state) => state.manager.userPermitCardList
  );
  const dispatch = useDispatch<hrDispatch>();

  useEffect(() => {
    dispatch(fetchGetUserPermitInfo());
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: "#e5e8e8" }} className="container">
      <div className="text-center mb-4">
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
            <th scope="col">İzin Türü</th>
            <th scope="col">İzin Durumu</th>
            <th scope="col">İzin Değerlendirme Durumu</th>
          </tr>
        </thead>
        <tbody>
          {isEmpty ? (
            <tr>
              <td colSpan={10}>İzin bekleyen çalışan bulunamamaktadır.</td>
            </tr>
          ) : (
            userPermitCardList.map((user, index) => (
              <UserPermitCard
                key={index}
                userId={user.userId}
                workHolidayId={user.workHolidayId}
                avatar={user.avatar}
                firstName={user.firstName}
                lastName={user.lastName}
                position={user.position}
                beginDate={user.beginDate}
                endDate={user.endDate}
                description={user.description}
                holidayType={user.holidayType}
                holidayState={user.holidayState}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserPermit;
