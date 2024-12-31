import React, { useState } from "react";
import { hrDispatch } from "../../../stores";
import { useDispatch } from "react-redux";
import { IListEmployeeListResponse } from "../../../models/Response/IListEmployeeListResponse";
import {
  Autocomplete,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Delete, MoreHoriz } from "@mui/icons-material";
import { IUpdateEmployeeRequest } from "../../../models/Request/IUpdateEmployeeRequest";
import {
  fetchDeleteEmployee,
  fetchEmployeeListByCompany,
  fetchUpdateEmployee,
} from "../../../stores/features/managerPanelSlice";
import { stringify } from "querystring";

function EmployeeCard(props: IListEmployeeListResponse) {
  const {
    companyId,
    userId,
    avatar,
    firstName,
    lastName,
    email,
    position,
    dateOfEmployment,
    dateOfTermination,
    annualSalary,
    address,
    dateOfBirth,
    gender,
    identityNumber,
    socialSecurityNumber,
    mobileNumber,
    employmentStatus,
  } = props;

  const options = ["Detay", "Duzenle", "Sil"];
  const [updateEmployee, setUpdateEmployee] = useState<IUpdateEmployeeRequest>({
    companyId: companyId,
    userId: userId,
    avatar: avatar,
    email: email,
    userState: employmentStatus,
    address: address,
    annualSalary: annualSalary as number,
    dateOfBirth: dateOfBirth,
    dateOfEmployment: dateOfEmployment,
    dateOfTermination: dateOfTermination,
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    identityNumber: identityNumber,
    socialSecurityNumber: socialSecurityNumber,
    mobileNumber: mobileNumber,
    position: position,
  });

  const dispatch = useDispatch<hrDispatch>();

  const doEmployeeUpdate = () => {
    dispatch(fetchUpdateEmployee(updateEmployee));
    setShowModal(false);
  };

  const handleDelete = async () => {
    try {
      await dispatch(fetchDeleteEmployee(userId)).unwrap(); // Unwrap ile hata kontrolü
      dispatch(fetchEmployeeListByCompany()); // Listeyi yeniden yükleme aksiyonu
      setShowDeleteModal(false); // Modalı kapat
    } catch (error) {
      console.error("Kullanıcı silme işlemi sırasında bir hata oluştu:", error);
    }
  };

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Silme modal'ı için state

  const open = Boolean(anchorEl);

  const genderOptions = ["male", "female", "other"];
  const positionOptions = [
    "intern",
    "junior",
    "mid level",
    "senior",
    "team lead",
    "manager",
    "director",
    "other",
  ];

  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isGenderEmpty, setIsGenderEmpty] = useState(false);
  const [isMobileNumberEmpty, setIsMobileNumberEmpty] = useState(false);
  const [isAddressEmpty, setIsAddressEmpty] = useState(false);
  const [isIdentityNumberEmpty, setIsIdentityNumberEmpty] = useState(false);
  const [isPositionEmpty, setIsPositionEmpty] = useState(false);
  const [isAnnualSalaryEmpty, setIsAnnualSalaryEmpty] = useState(false);
  const [isSocialSecurityNumberEmpty, setIsSocialSecurityNumberEmpty] =
    useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDuzenleClick = () => {
    setShowModal(true); // Modal'ı göster
    handleClose(); // Menü kapansın
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Silme modal'ını göster
    handleClose(); // Menü kapansın
  };

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={updateEmployee.avatar || ""}
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="text-muted mb-0">{updateEmployee.email}</p>
            </div>
          </div>
        </td>

        <td>
          {updateEmployee.firstName} {updateEmployee.lastName}
        </td>

        <td>{updateEmployee.position}</td>

        <td>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreHoriz />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  onClick={
                    option === "Duzenle"
                      ? handleDuzenleClick
                      : option === "Sil"
                        ? handleDeleteClick
                        : handleClose
                  }
                  style={option === "Sil" ? { color: "red" } : {}}
                >
                  {option === "Sil" && (
                    <Delete style={{ marginRight: 8, fontSize: 18 }} />
                  )}
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </td>
      </tr>

      {/* Modal for Editing Employee Details */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Çalışanı Düzenle
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <TextField
                  className="form-control mt-3"
                  placeholder="İsim"
                  value={updateEmployee.firstName}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                    setIsFirstNameEmpty(e.target.value === "");
                  }}
                  error={isFirstNameEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Soy İsim"
                  value={updateEmployee.lastName}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                    setIsLastNameEmpty(e.target.value === "");
                  }}
                  error={isLastNameEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Email"
                  value={updateEmployee.email}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                    setIsEmailEmpty(e.target.value === "");
                  }}
                  error={isEmailEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Telefon Numarası"
                  value={updateEmployee.mobileNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      mobileNumber: e.target.value,
                    }));
                    setIsMobileNumberEmpty(e.target.value === "");
                  }}
                  error={isMobileNumberEmpty}
                />
                <FormControl className="mt-4 form-control">
                  <InputLabel htmlFor="Yillik Maas">Yıllık Maaş</InputLabel>
                  <OutlinedInput
                    label="Yillik Maas"
                    id="Yillik Maas"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    value={updateEmployee.annualSalary || ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      setUpdateEmployee({
                        ...updateEmployee,
                        annualSalary: value ? parseInt(value, 10) : 0,
                      });
                      setIsAnnualSalaryEmpty(value.trim() === "");
                    }}
                    error={isAnnualSalaryEmpty}
                  />
                </FormControl>
                <TextField
                  className="form-control mt-3"
                  placeholder="Adres"
                  value={updateEmployee.address}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }));
                    setIsAddressEmpty(e.target.value === "");
                  }}
                  error={isAddressEmpty}
                />
                <TextField
                  className="mt-4 form-control"
                  label="Date of Employment"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) =>
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      dateOfEmployment: new Date(e.target.value), // Ensure this is a valid Date object
                    }))
                  }
                />

                <TextField
                  className="mt-4 form-control"
                  label="Ise Giris Tarihi"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) =>
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      dateOfEmployment: new Date(e.target.value),
                    }))
                  }
                />
                <Autocomplete
                  className="mt-3"
                  disablePortal
                  options={genderOptions}
                  value={updateEmployee.gender}
                  onChange={(event, value) => {
                    setUpdateEmployee({
                      ...updateEmployee,
                      gender: value || "",
                    });
                    setIsGenderEmpty(!value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cinsiyet"
                      error={isGenderEmpty}
                    />
                  )}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Kimlik Numarası"
                  value={updateEmployee.identityNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      identityNumber: e.target.value,
                    }));
                    setIsIdentityNumberEmpty(e.target.value === "");
                  }}
                  error={isIdentityNumberEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Sosyal Güvenlik Numarası"
                  value={updateEmployee.socialSecurityNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      socialSecurityNumber: e.target.value,
                    }));
                    setIsSocialSecurityNumberEmpty(e.target.value === "");
                  }}
                  error={isSocialSecurityNumberEmpty}
                />
                <Autocomplete
                  className="mt-3"
                  disablePortal
                  options={positionOptions}
                  value={updateEmployee.position}
                  onChange={(event, value) => {
                    setUpdateEmployee({
                      ...updateEmployee,
                      position: value || "",
                    });
                    setIsPositionEmpty(!value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Pozisyon"
                      error={isPositionEmpty}
                    />
                  )}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setShowModal(false)}
                >
                  Kapat
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={doEmployeeUpdate}
                >
                  Güncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Deleting Employee */}
      {showDeleteModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          role="dialog"
          aria-labelledby="deleteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">
                  Çalışanı Sil
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Bu çalışanı silmek istediğinizden emin misiniz?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                >
                  Hayır
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                  style={{ color: "white" }}
                >
                  Evet, Sil
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeeCard;
