// import React, { useState } from 'react'
// import { hrDispatch } from '../../../stores';
// import { useDispatch } from 'react-redux';
// import { IListEmployeeListResponse } from '../../../models/Response/IListEmployeeListResponse';

// interface IEmployeeCard {
//     companyId: number;
//     userId: number;
//     avatar: string;
//     email: string;
//     userState: string;
//     address: string;
//     annualSalary: string;
//     dateOfBirth: string;
//     dateOfEmployment: string;
//     dateOfTermination: string;
//     firstName: string;
//     lastName: string;
//     gender:string;
//     identityNumber: string;
//     socialSecurityNumber: string;
//     mobileNumber: string;
//     position: string;

// }

// function EmployeeCard(props: IEmployeeCard) {
//     const[avatar, setUserAvatar] =useState(props.avatar);
//     const[email, setEmail] =useState(props.email);
//     const[userState, setUserState] =useState(props.userState);
//     const[address, setAddress] =useState(props.address);
//     const[annualSalary, setAnnualSalary] =useState(props.annualSalary);
//     const[dateOfBirth, setDateOfBirth] =useState(props.dateOfBirth);
//     const[dateOfEmployment, setDateOfEmployment] =useState(props.dateOfEmployment);
//     const[dateOfTermination, setDateOfTermination] =useState(props.dateOfTermination);
//     const[firstName, setFirstName] =useState(props.firstName);
//     const[lastName, setLastName] =useState(props.lastName);
//     const[gender, setGender] =useState(props.gender);
//     const[identityNumber, setIdentityNumber] =useState(props.identityNumber);
//     const[socialSecurityNumber, setSocialSecurityNumber] =useState(props.socialSecurityNumber);
//     const[mobileNumber, setMobileNumber] =useState(props.mobileNumber);
//     const[position, setPosition] =useState(props.position);

//     const dispatch = useDispatch<hrDispatch>();

//     const handleSave = () => {
//         const getEmployeeList: IListEmployeeListResponse = {
//           companyId : props.companyId,
//           userId: props.userId,
//           avatar,
//           email,
//           userState,
//           address,
//           annualSalary,
//           dateOfBirth,
//           dateOfEmployment,
//           dateOfTermination,
//           firstName,
//           lastName,
//           gender,
//           identityNumber,
//           socialSecurityNumber,
//           mobileNumber,
//           position,

//         };
//         console.log(getEmployeeList);
//         dispatch(fetchGetEmployeeList(getEmployeeList));
//     };

//     return (
//       <>
//       <tr>
//         <td>
//           <div className="d-flex align-items-center">
//             <img
//               src={avatar || ""}
//               alt="Company Logo"
//               style={{ width: "45px", height: "45px" }}
//               className="rounded-circle"
//             />
//             <div className="ms-3">
//               <p className="fw-bold mb-1">{props.avatar}</p>
//               <p className="text-muted mb-0">{props.email}</p>
//             </div>
//           </div>
//         </td>
//         <td style={{ paddingLeft: "60px" }}>${props.userState}</td>
//         <td>
//           <button className={getButtonClass(props.memberShipState)} disabled>
//             {props.memberShipState}
//           </button>
//         </td>
//         <td>
//           <button
//             type="button"
//             className="btn btn-link btn-sm btn-rounded"
//             data-bs-toggle="modal"
//             data-bs-target={"#customer" + props.companyId}
//           >
//             Edit
//           </button>
//         </td>
//       </tr>

//       {/* Modal for editing customer details */}
//       <div
//         className="modal fade"
//         id={"customer" + props.companyId}
//         data-bs-backdrop="static"
//         data-bs-keyboard="false"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id={"customer" + props.companyId}>
//                 Şirket Bilgileri Güncelleme
//               </h1>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <input type="text" readOnly hidden value={props.companyId} />
//               <label htmlFor="companyLogo" className="form-label">
//                 Şirket Logosu Yükleyin
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="companyLogo"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setCompanyLogo(URL.createObjectURL(e.target.files![0]))
//                 }
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Şirket Adınızı Giriniz"
//                 value={companyName || ""}
//                 onChange={(e) => setCompanyName(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Mail Adresinizi Giriniz"
//                 value={companyMail || ""}
//                 onChange={(e) => setCompanyMail(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 readOnly
//                 type="text"
//                 className="form-control"
//                 placeholder="Üyelik Planınızı Giriniz"
//                 value={props.memberShipState || ""}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Şirket Adresinizi Giriniz"
//                 value={companyAddress || ""}
//                 onChange={(e) => setCompanyAddress(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Şirket Telefon Numaranızı Giriniz"
//                 value={props.companyTelNo || ""}
//                 onChange={(e) => setCompanyTelNo(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Şirket Bölgesini Giriniz"
//                 value={props.companyRegion || ""}
//                 onChange={(e) => setCompanyRegion(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Şirket Türünü Giriniz"
//                 value={companyType || ""}
//                 onChange={(e) => setCompanyType(e.target.value)}
//               />
//             </div>
//             <div className="modal-body">
//               <input
//                 readOnly
//                 type="text"
//                 className="form-control"
//                 placeholder="Ödenen Hizmet Bedelini Giriniz"
//                 value={props.totalPaymentAmount || ""}
//               />
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 İptal
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-success"
//                 style={{ color: "white" }}
//                 data-bs-dismiss="modal"
//                 onClick={handleSave}
//               >
//                 Kaydet
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//     );
// }

// export default EmployeeCard
