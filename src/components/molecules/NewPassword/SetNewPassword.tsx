import React, { useState } from "react";
import "./SetNewPassword.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { hrDispatch } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchNewPassword } from "../../../stores/features/authSlice";
function SetNewPassword() {
  const dispatch = useDispatch<hrDispatch>();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [isWrong, setIsWrong] = useState(false);

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
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const doResetPassword = () => {
    if (password === "" || rePassword === "") {
      setIsPasswordEmpty(true);
      return;
    } else setIsPasswordEmpty(false);

    if (password !== rePassword) {
      setIsWrong(true);
      return;
    } else setIsWrong(false);
    dispatch(fetchNewPassword({ password, rePassword }));
  };
  return (
    <section className="vh-100 gradient-custom-new-password">
      <div className="container h-100">
        <div className="row d-flex justify-content-center m-0 p-0 align-items-center h-50">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card-body p-5 text-center">
              <div className="mb-md-5 mt-md-4 pb-5 bg-light p-5 rounded-3 border border-light">
                <h2 className="fw-bold mb-2">Yeni Sifre</h2>
                <p className="text-black-50 mb-5">
                  Belirlemek istediginiz yeni sifreyi giriniz!
                </p>

                <div
                  data-mdb-input-init
                  className="form-outline form-white mb-4"
                >
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
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <div
                  data-mdb-input-init
                  className="form-outline form-white mb-4"
                >
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

                <button
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-outline-dark btn-lg px-5"
                  type="submit"
                  onClick={doResetPassword}
                >
                  Yenile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SetNewPassword;
