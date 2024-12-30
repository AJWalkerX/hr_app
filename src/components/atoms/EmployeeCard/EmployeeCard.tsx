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
import { MoreHoriz } from "@mui/icons-material";
import { IUpdateEmployeeRequest } from "../../../models/Request/IUpdateEmployeeRequest";
import {
  fetchEmployeeListByCompany,
  fetchUpdateEmployee,
} from "../../../stores/features/managerPanelSlice";

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
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);
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

        <td /*style={{ verticalAlign: 'middle' }}*/>
          <>
            {updateEmployee.firstName} {updateEmployee.lastName}
          </>
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
                    option === "Duzenle" ? handleDuzenleClick : handleClose
                  }
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </td>
      </tr>
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
                  Calisani Duzenle
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
                  className="form-control"
                  placeholder="Isim"
                  value={updateEmployee.firstName}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsFirstNameEmpty(true);
                    }
                  }}
                  error={isFirstNameEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Soy Isim"
                  value={updateEmployee.lastName}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsLastNameEmpty(true);
                    }
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
                    if (e.target.value === "") {
                      setIsEmailEmpty(true);
                    }
                  }}
                  error={isEmailEmpty}
                />

                <TextField
                  className="mt-4 form-control"
                  label="Dogum Tarihi"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={
                    updateEmployee.dateOfBirth
                      ? updateEmployee.dateOfBirth.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      dateOfBirth: new Date(e.target.value),
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
                  placeholder="Telefon Numarasi"
                  value={updateEmployee.mobileNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      mobileNumber: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsMobileNumberEmpty(true);
                    }
                  }}
                  error={isMobileNumberEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="Adres"
                  value={updateEmployee.address}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsAddressEmpty(true);
                    }
                  }}
                  error={isAddressEmpty}
                />
                <TextField
                  className="form-control mt-3"
                  placeholder="TC Kimlik Numarasi"
                  value={updateEmployee.identityNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      identityNumber: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsIdentityNumberEmpty(true);
                    }
                  }}
                  error={isIdentityNumberEmpty}
                />
                <TextField
                  className="mt-4 form-control"
                  label="Ise Giris Tarihi"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={
                    updateEmployee.dateOfEmployment
                      ? updateEmployee.dateOfEmployment
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
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
                <FormControl className="mt-4 form-control">
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Yillik Maasi
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Yillik Maasi"
                    value={updateEmployee.annualSalary || ""} // Boş değer için güvenlik
                    onChange={(e) => {
                      const value = e.target.value;
                      const numericValue = value ? parseInt(value, 10) : ""; // Boş bırakılabilir
                      setUpdateEmployee({
                        ...updateEmployee,
                        annualSalary: !!numericValue ? numericValue : 0,
                      });
                      setIsAnnualSalaryEmpty(value.trim() === ""); // Sadece boş mu kontrol et
                    }}
                    error={isAnnualSalaryEmpty}
                  />
                </FormControl>
                <TextField
                  className="form-control mt-3"
                  placeholder="Sosyal Guvence Numarasi"
                  value={updateEmployee.socialSecurityNumber}
                  onChange={(e) => {
                    setUpdateEmployee((prev) => ({
                      ...prev,
                      socialSecurityNumber: e.target.value,
                    }));
                    if (e.target.value === "") {
                      setIsSocialSecurityNumberEmpty(true);
                    }
                  }}
                  error={isSocialSecurityNumberEmpty}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Kapat
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ color: "white" }}
                  onClick={doEmployeeUpdate}
                >
                  Guncelle
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
