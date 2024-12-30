import React, { useEffect } from 'react'
import UserPermitCard from '../../atoms/UserCard/UserPermitCard'
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse';
import { hrDispatch, hrUseSelector } from '../../../stores';
import ViewPermitCard from '../../atoms/UserCard/ViewPermitCard';
import { IUserPermitViewResponse } from '../../../models/Response/IUserPermitViewResponse';
import { useDispatch } from 'react-redux';
import { fetchUserPermitView } from '../../../stores/features/userPanelSlice';

function ViewYourPermit() {

  const viewPermitCardList : IUserPermitViewResponse[] = hrUseSelector((state) => state.userpanel.viewPermitCardList);
const dispatch = useDispatch<hrDispatch>();
useEffect(()=>{
  dispatch(fetchUserPermitView());
},[dispatch]);


  return (
    <div  className="container">
    <div className="text-center mb-4">
      <h1>Geçmiş İzin Durumları</h1>
    </div>
    <table className="table table-striped table-hover text-center">
      <thead className="table-dark">
        <tr>
       
  
          <th scope="col">İzin Başlangıç Tarihi</th>
          <th scope="col">İzin Bitiş Tarihi</th>
          <th scope="col">Açıklama</th>
          <th scope="col">İzin Türü</th>
          <th scope="col">İzin Durumu</th>
          
        </tr>
      </thead>
      <tbody>
       {
        viewPermitCardList.map((permit, index)=>(
          <ViewPermitCard
          key={index}
          userId={permit.userId}
          workHolidayId={permit.workHolidayId}
          beginDate={permit.beginDate}
          endDate={permit.endDate}
          description={permit.description}
          holidayType={permit.holidayType}
          holidayState={permit.holidayState}
          />
        ))

       }

       
      </tbody>
    </table>
  </div>
  )
}

export default ViewYourPermit