import React from 'react'
import { IEmployeesResponse } from '../../../models/Response/IEmployeesResponse'

function EmployeeDetailCard(props: IEmployeesResponse) {
  return (
    <div>
        <h2>Çalışan Detayları</h2>
        <div>
            <img src={props.avatar} alt={`${props.firstName} ${props.lastName}`} />
        </div>
        <div>
            <p><strong>Ad:</strong>{props.firstName}</p>
            <p><strong>Soyad:</strong>{props.lastName}</p>
            <p><strong>Pozisyon:</strong>{props.position}</p>
            <p><strong>EMail:</strong>{props.email}</p>
            <p><strong>Telefon:</strong>{props.mobileNumber}</p>
            <p><strong>Adres:</strong>{props.address}</p>
            <p><strong>Doğum Tarihi:</strong>{new Date(props.dateOfBirth).toLocaleDateString()}</p>
            <p><strong>İşe Başlama Tarihi:</strong>{new Date(props.dateOfEmployment).toLocaleDateString()}</p>
            <p><strong>İşten Çıkış Tarihi:</strong>{props.dateOfTermination ? new Date(props.dateOfTermination).toLocaleDateString() : 'Hala Çalışıyor'}</p>
            <p><strong>Kimlik No:</strong>{props.identityNumber}</p>
            <p><strong>Sosyal Güvenlik No:</strong>{props.socialSecurityNumber}</p>
            <p><strong>Çalışan Durumu:</strong>{props.employmentStatus}</p>
            <p><strong>Maaş:</strong>{props.annualSalary}</p>
           
        </div>
    </div>
  )
}

export default EmployeeDetailCard