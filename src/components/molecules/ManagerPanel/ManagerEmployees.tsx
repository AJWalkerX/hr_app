import React, { useEffect, useState } from "react";
import CustomerCard from "../../atoms/CustomerCard/CustomerCard";
import EmployeeCard from "../../atoms/EmployeeCard/EmployeeCard";
import { IEmployeesResponse } from "../../../models/Response/IEmployeesResponse";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import {
  fecthEmployeeListByCompany,
  fetchAddNewEmployee,
} from "../../../stores/features/managerPanelSlice";
import {
  EmojiEmotions,
  Preview,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { INewEmployeeRequest } from "../../../models/Request/INewEmployeeRequest";

function ManagerEmployees() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowRePassword = () => setShowRePassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownRePassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpRePassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const employeeList: IEmployeesResponse[] = hrUseSelector(
    (state) => state.manager.employeeList
  );
  const [isWrong, setIsWrong] = useState(false);

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

  const [newEmployee, setNewEmployee] = useState<INewEmployeeRequest>({
    email: "",
    password: "",
    rePassword: "",
    firstName: "",
    lastName: "",
    identityNumber: "",
    dateOfBirth: new Date(),
    mobileNumber: "",
    address: "",
    gender: "",
    position: "",
    dateOfEmployment: new Date(),
    annualSalary: 0,
    socialSecurityNumber: "",
  });
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isGenderEmpty, setIsGenderEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isMobileNumberEmpty, setIsMobileNumberEmpty] = useState(false);
  const [isAddressEmpty, setIsAddressEmpty] = useState(false);
  const [isIdentityNumberEmpty, setIsIdentityNumberEmpty] = useState(false);
  const [isPositionEmpty, setIsPositionEmpty] = useState(false);
  const [isAnnualSalaryEmpty, setIsAnnualSalaryEmpty] = useState(false);
  const [isSocialSecurityNumberEmpty, setIsSocialSecurityNumberEmpty] =
    useState(false);

  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fecthEmployeeListByCompany());
  }, [dispatch]);

  const addNewEmployee = async () => {
    const payload = newEmployee;
    await dispatch(fetchAddNewEmployee(payload));
    dispatch(fecthEmployeeListByCompany());
  };
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
            style={{ backgroundColor: "#85c1e9", color: "white" }}
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#newEmployeeModal"
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
            {employeeList.map((employee, index) => {
              return (
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
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="newEmployeeModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="newEmployeeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newEmployeeModal">
                Yeni Calisan Ekle
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <TextField
                className="form-control"
                placeholder="Isim"
                value={newEmployee.firstName}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                value={newEmployee.lastName}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                value={newEmployee.email}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                className="form-control mt-3"
                placeholder="Sifre"
                type={showPassword ? "text" : "password"}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  if (e.target.value === "") {
                    setIsPasswordEmpty(true);
                  }
                }}
                error={isPasswordEmpty}
                sx={{ width: "100%" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className="form-control mt-3"
                placeholder="Sifre Tekrar"
                type={showRePassword ? "text" : "password"}
                value={newEmployee.rePassword}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
                    ...prev,
                    rePassword: e.target.value,
                  }));
                  if (e.target.value !== newEmployee.password) {
                    setIsWrong(true);
                  } else {
                    setIsWrong(false);
                  }
                }}
                error={isWrong}
                sx={{ width: "100%" }}
                helperText={isWrong ? "Sifreler uyusmuyor" : null}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showRePassword
                            ? "hide the password"
                            : "display the password"
                        }
                        onClick={handleClickShowRePassword}
                        onMouseDown={handleMouseDownRePassword}
                        onMouseUp={handleMouseUpRePassword}
                        edge="end"
                      >
                        {showRePassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControl className="mt-4 form-control">
                <InputLabel htmlFor="Dogum Tarihi">Dogum Tarihi</InputLabel>
                <OutlinedInput
                  type="date"
                  id="Dogum Tarihi"
                  label="Dogum Tarihi"
                  value={
                    newEmployee.dateOfBirth
                      ? newEmployee.dateOfBirth.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setNewEmployee((prev) => ({
                      ...prev,
                      dateOfBirth: new Date(e.target.value),
                    }))
                  }
                />
              </FormControl>
              <Autocomplete
                className="mt-3"
                disablePortal
                options={genderOptions}
                value={newEmployee.gender}
                onChange={(event, value) => {
                  setNewEmployee({
                    ...newEmployee,
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
                value={newEmployee.mobileNumber}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                value={newEmployee.address}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                value={newEmployee.identityNumber}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
                    ...prev,
                    identityNumber: e.target.value,
                  }));
                  if (e.target.value === "") {
                    setIsIdentityNumberEmpty(true);
                  }
                }}
                error={isIdentityNumberEmpty}
              />
              <FormControl className="mt-4 form-control">
                <InputLabel htmlFor="Ise Giris Tarihi">
                  Ise Giris Tarihi
                </InputLabel>
                <OutlinedInput
                  type="date"
                  id="Ise Giris Tarihi"
                  label="Ise Giris Tarihi"
                  value={
                    newEmployee.dateOfEmployment
                      ? newEmployee.dateOfEmployment.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setNewEmployee((prev) => ({
                      ...prev,
                      dateOfEmployment: new Date(e.target.value),
                    }))
                  }
                />
              </FormControl>
              <Autocomplete
                className="mt-3"
                disablePortal
                options={positionOptions}
                value={newEmployee.position}
                onChange={(event, value) => {
                  setNewEmployee({
                    ...newEmployee,
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
                  value={newEmployee.annualSalary || ""} // Boş değer için güvenlik
                  onChange={(e) => {
                    const value = e.target.value;
                    const numericValue = value ? parseInt(value, 10) : ""; // Boş bırakılabilir
                    setNewEmployee({
                      ...newEmployee,
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
                value={newEmployee.socialSecurityNumber}
                onChange={(e) => {
                  setNewEmployee((prev) => ({
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
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={addNewEmployee}
                data-bs-dismiss="modal"
              >
                Gonder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerEmployees;
