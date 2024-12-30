import React from 'react'
import { IEmployeesResponse } from '../../../models/Response/IEmployeesResponse'

export interface EmployeeDetailCardProps{
  userId: number;
  avatar: string;
  email: string;
  address: string;
  annualSalary: number;
  dateOfBirth: Date;
  dateOfEmployment: Date;
  dateOfTermination: Date | null;
  firstName: string;
  lastName: string;
  gender: string;
  identityNumber: string;
  socialSecurityNumber: string;
  mobileNumber: string;
  position: string;
  employmentStatus: string;
}


function EmployeeDetailCard(props:EmployeeDetailCardProps) {
  return (
    <div>
      <div className="row text-center mt-5 ">
        <h1 style={{color:'white'}}>Personel Profil Detayları</h1>
      </div>
      <div className="row mt-5">
      <div className="col-3 ms-5 d-flex flex-column justify-content-center align-items-center border " style={{backgroundColor:'white', borderRadius:'30px'}}>
        <div className="row mt-2 " style={{width:'200px', height:'200px'}}>
          <img style={{borderRadius:'50%'}} src={props.avatar} alt={`${props.firstName} ${props.lastName}`} />
        </div>
        <div className="row text-center mt-3">
          <p style={{fontWeight:'bold'}}>{`${props.firstName} ${props.lastName}`}</p>
        </div>
        <div className="row d-flex align-items-center">
        <p style={{fontWeight:'bold'}} className ="text-center">{props.position}</p>
        <p style={{fontWeight:'bold'}} className="text-center">{props.email}</p>
       
        </div>
        

      </div>
      <div className="col-8 ms-2  border"  style={{backgroundColor:'white', borderRadius:'30px'}}>
        <div className="row ms-1 mt-2">
          
            <p><strong>Telefon :</strong> {props.mobileNumber}</p>
            <p><strong>Adres :</strong> {props.address}</p>
            <p><strong>Cinsiyet :</strong> {props.gender}</p>
            <p><strong>Doğum Tarihi :</strong> {new Date(props.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>İşe Başlama Tarihi :</strong> {new Date(props.dateOfEmployment).toLocaleDateString()}</p>
            <p><strong>İşten Çıkış Tarihi :</strong> {props.dateOfTermination ? new Date(props.dateOfTermination).toLocaleDateString() : 'Hala Çalışıyor'}</p>
            <p><strong>Kimlik No :</strong> {props.identityNumber}</p>
            <p><strong>Sosyal Güvenlik No :</strong> {props.socialSecurityNumber}</p>
            <p><strong>Çalışan Durumu :</strong> {props.employmentStatus}</p>
            <p><strong>Maaş :</strong> {props.annualSalary}</p>
        </div>

      </div>
      </div>
      
    </div>
  )
}

export default EmployeeDetailCard