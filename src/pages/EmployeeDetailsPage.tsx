import React from 'react'
import EmployeeDetailCard from '../components/atoms/EmployeeCard/EmployeeDetailCard'

function EmployeeDetailsPage() {
    const employee = {
        userId: 101,
        avatar: 'https://picsum.photos/100/100',
        email: 'ali.veli@example.com',
        address: 'Atatürk Caddesi, No:123, Ankara',
        annualSalary: 85000,
        dateOfBirth: new Date('1990-05-15'),
        dateOfEmployment: new Date('2015-06-01'),
        dateOfTermination: null,
        firstName: 'Ali',
        lastName: 'Veli',
        gender: 'Erkek',
        identityNumber: '12345678901',
        socialSecurityNumber: '123-45-6789',
        mobileNumber: '+90 555 555 5555',
        position: 'Yazılım Mühendisi',
        employmentStatus: 'Aktif',
      };
  return (
    <div className="container-fluid"  style={{backgroundColor:'rgb(10, 57, 129)', height:'100vh'}}>
         <EmployeeDetailCard {...employee}/>
    </div>
   
    
  )
}

export default EmployeeDetailsPage