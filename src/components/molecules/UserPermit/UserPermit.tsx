import React, { useEffect } from 'react'
import UserPermitCard from '../../atoms/UserCard/UserPermitCard'
import permitLogo from '../../../img/permitlogo.png'
import { IUserPermitResponse } from '../../../models/Response/IUserPermitResponse'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { useDispatch } from 'react-redux'
import { fetchGetUserPermitInfo } from '../../../stores/features/userPanelSlice'
function UserPermit() {
 const userPermitCardList : IUserPermitResponse[]=hrUseSelector(state=>state.userpanel.userPermitCardList);
 const dispatch = useDispatch<hrDispatch>();
 useEffect(()=>{
  dispatch(fetchGetUserPermitInfo());
 },[]);
  
  return (

    <>
     <div className="row text-center mt-5 d-flex align-items-center justify-content-center" >
        <img src={permitLogo} style={{width:'300px',height:'250px'}} />
        <h1>İzin Yönetim Paneli</h1>
        
     </div>

    
     <div className="row mt-5">

      {
        userPermitCardList.map((user,index)=>{
          return(
            <UserPermitCard
            key={index}
            userId={user.userId}
            avatar={user.avatar}
            firstName={user.firstName}
            lastName={user.lastName}
            position={user.position}
            employmentStatus={user.employmentStatus} />
          )
       

        })
      }
      
    
    </div>
   
    </>
   
  )
};

export default UserPermit