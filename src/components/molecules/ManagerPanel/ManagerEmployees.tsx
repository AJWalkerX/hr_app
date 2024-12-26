import React, { useEffect } from 'react'
import CustomerCard from '../../atoms/CustomerCard/CustomerCard'
import EmployeeCard from '../../atoms/EmployeeCard/EmployeeCard'
import { IEmployeesResponse } from '../../../models/Response/IEmployeesResponse'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { useDispatch } from 'react-redux'
import { fecthEmployeeListByCompany } from '../../../stores/features/managerPanelSlice'
import { EmojiEmotions } from '@mui/icons-material'

function ManagerEmployees() {
  const employeeList: IEmployeesResponse[] = hrUseSelector(
    (state) => state.manager.employeeList
  );
  const dispatch = useDispatch<hrDispatch>();

  useEffect(()=> {
    dispatch(fecthEmployeeListByCompany());
  },[dispatch])

  return (
    <>
      <div className="row mt-4">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Çalışanlar</p>
        </div>
        <div className="col-5"></div>
        <div className="col-4 d-flex">
          
        <button
  className="btn btn-outline-secondary my-2 my-sm-0"
  style={{ backgroundColor: '#85c1e9', color: 'white' }}
  type="submit"
>
  + Çalışan Ekle
</button>
        </div>
      </div>
      <div className="row mt-5">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Profil</th>
              <th>Ad Soyad</th>
              <th>Pozisyon</th>
              <th>Detay/Düzenle</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {employeeList.map((employee,index)=>{
                return(
                  <EmployeeCard
                  key={index}
                  companyId={employee.companyId}
                  userId={employee.userId}
                  avatar={employee.avatar}
                  email={employee.email}
                  address={employee.address}
                  annualSalary={employee.annualSalary}
                  dateOfBirth={employee.dateOfBirth}
                  dateOfEmployment={employee.dateOfEmployment}
                  dateOfTermination={employee.dateOfTermination}
                  firstName={employee.firstName}
                  lastName={employee.lastName}
                  gender={employee.gender}
                  identityNumber={employee.identityNumber}
                  socialSecurityNumber={employee.socialSecurityNumber}
                  mobileNumber={employee.mobileNumber}
                  position={employee.position}          
                  employmentStatus={employee.employmentStatus}
                                    />
                )
              })}
                  
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManagerEmployees