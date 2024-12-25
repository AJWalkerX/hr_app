import React, { useState } from 'react'

interface IEmployeeCard {
    companyId: number;
    userId: number;
    userAvatar: string;
    personalMail: string;
    userState: string;
    personalAddress: string;
    annualSalary: string;
    dateOfBirth: string;
    dateOfEmployment: string;
    dateOfTermination: string;
    firstName: string;
    lastName: string;
    gender:string;
    identityNumber: string;
    socialSecurityNumber: string;
    phoneNumber: string;
    position: string;

}

function EmployeeCard(props: IEmployeeCard) {
    const[userAvatar, setUserAvatar] =useState(props.userAvatar);
    const[personalMail, setPersonalMail] =useState(props.personalMail);
    const[userState, setUserState] =useState(props.userState);
    const[personalAddress, setPersonalAddress] =useState(props.personalAddress);
    const[annualSalary, setAnnualSalary] =useState(props.annualSalary);
    const[dateOfBirth, setDateOfBirth] =useState(props.dateOfBirth);
    const[dateOfEmployment, setDateOfEmployment] =useState(props.dateOfEmployment);
    const[dateOfTermination, setDateOfTermination] =useState(props.dateOfTermination);
    const[firstName, setFirstName] =useState(props.firstName);
    const[lastName, setLastName] =useState(props.lastName);
    const[gender, setGender] =useState(props.gender);
    const[identityNumber, setIdentityNumber] =useState(props.identityNumber);
    const[socialSecurityNumber, setSocialSecurityNumber] =useState(props.socialSecurityNumber);
    const[phoneNumber, setPhoneNumber] =useState(props.phoneNumber);
    const[position, setPosition] =useState(props.position);
  return (
    <div>EmployeeCard</div>
  )
}

export default EmployeeCard