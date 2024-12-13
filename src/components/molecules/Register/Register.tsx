import React, { useState, useEffect } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchRegister } from "../../../stores/features/authSlice";
import Swal from "sweetalert2";
import {
  Autocomplete,
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Register() {
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

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [personalRole, setPersonalRole] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [isWrong, setIsWrong] = useState(false);

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isSurnameEmpty, setIsSurnameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [isRoleEmpty, setIsRoleEmpty] = useState(false);
  const [isCompanyNameEmpty, setIsCompanyNameEmpty] = useState(false);

  const dispatch = useDispatch<hrDispatch>();

  const doRegister = () => {
    setIsNameEmpty(name === "" || name === null);
    setIsSurnameEmpty(surname === "" || surname === null);
    setIsEmailEmpty(email === "" || email === null);
    setIsPasswordEmpty(password === "" || password === null);
    setIsRoleEmpty(personalRole === "" || personalRole === null);
    setIsCompanyNameEmpty(companyName === "" || companyName === null);
    const payload = {
      name,
      surname,
      email,
      password,
      rePassword,
      personalRole,
      companyName,
    };
    dispatch(fetchRegister(payload));
  };
  const options = [
    "intern",
    "junior",
    "mid level",
    "senior",
    "team lead",
    "manager",
    "director",
    "other",
  ];

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#0a3981" }}>
        <div className="row d-flex justify-content-center align-items-center h-100 margin-register">
          <div className="col-lg-12 col-xl-11">
            <div
              className="bg-white text-black w-100 h-100"
              style={{ borderRadius: "25px" }}
            >
              <div className="p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold">
                      Hemen ücretsiz deneyin
                    </p>
                    <p className="text-center text-muted">
                      15 gün ücretsiz denemek için formu tamamlayın.
                    </p>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0`}>
                        <TextField
                          placeholder="Isim"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (e.target.value === "") {
                              setIsNameEmpty(true);
                            }
                          }}
                          error={isNameEmpty}
                        />
                      </div>
                      <div className={`form-outline flex-fill mb-0`}>
                        <TextField
                          placeholder="Soyisim"
                          value={surname}
                          onChange={(e) => {
                            setSurname(e.target.value);
                            if (e.target.value === "") {
                              setIsSurnameEmpty(true);
                            }
                          }}
                          error={isSurnameEmpty}
                          fullWidth
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0 `}>
                        <TextField
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (e.target.value === "") {
                              setIsEmailEmpty(true);
                            }
                          }}
                          error={isEmailEmpty}
                          sx={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 position-relative">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0 `}>
                        <TextField
                          placeholder="Sifre"
                          type={showPassword ? "text" : "password"}
                          onChange={(e) => {
                            setPassword(e.target.value);
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
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 position-relative">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0 `}>
                        <TextField
                          placeholder="Sifre Tekrar"
                          type={showRePassword ? "text" : "password"}
                          value={rePassword}
                          onChange={(e) => {
                            setRePassword(e.target.value);
                            if (e.target.value !== password) {
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
                                  {showRePassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0 `}>
                        <Autocomplete
                          disablePortal
                          options={options}
                          value={personalRole}
                          onChange={(event, value) => {
                            setPersonalRole(value || "");
                            setIsRoleEmpty(!value);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Unvan"
                              error={isRoleEmpty}
                            />
                          )}
                        />
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-building fa-lg me-3 fa-fw"></i>
                      <div className={`form-outline flex-fill mb-0 `}>
                        <TextField
                          placeholder="Sirket Adi"
                          value={companyName}
                          onChange={(e) => {
                            setCompanyName(e.target.value);
                            if (e.target.value === "") {
                              setIsCompanyNameEmpty(true);
                            }
                          }}
                          error={isCompanyNameEmpty}
                          sx={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="mx-4 mb-3 mb-lg-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg w-100 ms-4"
                        onClick={doRegister}
                      >
                        Talep Olustur
                      </button>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-4 d-flex flex-column col-xl-5 justify-content-center p-5">
                    <h2 className="fw-bold">
                      Lisans ücreti olmadan kullandığınız kadar ödeyin
                    </h2>
                    <p>
                      Çalışan başına ücretlendirme ile sürpriz faturalarla
                      karşılaşmayın.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
