import React, { useState } from 'react'
import { hrDispatch } from '../../../stores';
import { useDispatch } from 'react-redux';
import { IListEmployeeListResponse } from '../../../models/Response/IListEmployeeListResponse';
import { fecthEmployeeListByCompany } from '../../../stores/features/managerPanelSlice';

interface IEmployeeCard {
    companyId: number;
    userId: number;
    avatar: string;
    email: string;
    address: string;
    annualSalary: string;
    dateOfBirth: string;
    dateOfEmployment: string;
    dateOfTermination: string;
    firstName: string;
    lastName: string;
    gender:string;
    identityNumber: string;
    socialSecurityNumber: string;
    mobileNumber: string;
    position: string;
    employmentStatus: string;

}

function EmployeeCard(props: IEmployeeCard) {
    const[avatar, setUserAvatar] =useState(props.avatar);
    const[email, setEmail] =useState(props.email);
    const[address, setAddress] =useState(props.address);
    const[annualSalary, setAnnualSalary] =useState(props.annualSalary);
    const[dateOfBirth, setDateOfBirth] =useState(props.dateOfBirth);
    const[dateOfEmployment, setDateOfEmployment] =useState(props.dateOfEmployment);
    const[dateOfTermination, setDateOfTermination] =useState(props.dateOfTermination);
    const[firstName, setFirstName] =useState(props.firstName);
    const[lastName, setLastName] =useState(props.lastName);
    const[gender, setGender] =useState(props.gender);
    const[identityNumber, setIdentityNumber] =useState(props.identityNumber);
    const[socialSecurityNumber, setSocialSecurityNumber] =useState(props.socialSecurityNumber);
    const[mobileNumber, setMobileNumber] =useState(props.mobileNumber);
    const[position, setPosition] =useState(props.position);
    const[employmentStatus, setEmploymentStatus] = useState(props.employmentStatus)

    const dispatch = useDispatch<hrDispatch>();

    const handleSave = () => {
        const getEmployeeList: IListEmployeeListResponse = {
          companyId : props.companyId,
          userId: props.userId,
          avatar,
          email,
          address,
          annualSalary,
          dateOfBirth,
          dateOfEmployment,
          dateOfTermination,
          firstName,
          lastName,
          gender,
          identityNumber,
          socialSecurityNumber,
          mobileNumber,
          position,
          employmentStatus,
          
        };
        console.log(getEmployeeList);
        dispatch(fecthEmployeeListByCompany());
    };

    return (
      <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={props.avatar || ""}
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="text-muted mb-0">{props.email}</p>
            </div>
          </div>
        </td>
        
        <td /*style={{ verticalAlign: 'middle' }}*/ >
        <>{props.firstName} {props.lastName}</>
      </td>

      <td>
        {props.position}
      </td>

      <td>
          <button
            type="button"
            className="btn btn-link btn-sm btn-rounded"
            data-bs-toggle="modal"
            data-bs-target={"#employee" + props.companyId}
          >
            Edit
          </button>
      </td>

      </tr>

      {/* Modal for editing customer details */}
      <div
        className="modal fade"
        id={"employee" + props.companyId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={"employee" + props.companyId}>
                Çalışan Bilgisi Güncelleme
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input type="text" readOnly hidden value={props.companyId} />
              <label htmlFor="avatar" className="form-label">
                Personel için fotoğraf yükleyiniz.
              </label>
              <input
                type="file"
                className="form-control"
                id="avatar"
                accept="image/*"
                onChange={(e)=>setUserAvatar(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personel Adı"
                value={firstName || ""}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personel soyadı"
                value={lastName || ""}
                onChange={(e)=>setLastName(e.target.value)}
                />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personel mail adresi"
                value={email || ""}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personel Adresi"
                value={address || ""}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personel Telefon Numarası"
                value={mobileNumber || ""}
                onChange={(e)=>setMobileNumber(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personelin Yıllık Maaaşı"
                value={annualSalary || ""}
                onChange={(e)=>setAnnualSalary(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Personel Doğum Tarihi"
                value={dateOfBirth || ""}
                onChange={(e)=>setDateOfBirth(e.target.value)}

              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personelin İşe Başlama Tarihi"
                value={dateOfEmployment|| ""}
                onChange={(e)=>setDateOfEmployment(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personelin işten Ayrılma Tarihi"
                value={dateOfTermination|| ""}
                onChange={(e)=>setDateOfTermination(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personelin Cinsiyeti"
                value={gender|| ""}
                onChange={(e)=>setGender(e.target.value)}
              />
            </div><div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personel TC Kimlik Numarası"
                value={identityNumber|| ""}
                onChange={(e)=>setIdentityNumber(e.target.value)}
              />
            </div><div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personelin Sosyal Güvenlik Numarası"
                value={socialSecurityNumber|| ""}
                onChange={(e)=>setSocialSecurityNumber(e.target.value)}
              />
            </div><div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personelin Pozisyonu"
                value={position|| ""}
                onChange={(e)=>setPosition(e.target.value)}
              />
            </div><div className="modal-body">
              <input
                readOnly
                type="text"
                className="form-control"
                placeholder="Personel"
                value={employmentStatus|| ""}
                onChange={(e)=>setEmploymentStatus(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                İptal
              </button>
              <button
                type="button"
                className="btn btn-success"
                style={{ color: "white" }}
                data-bs-dismiss="modal"
                onClick={handleSave}
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default EmployeeCard