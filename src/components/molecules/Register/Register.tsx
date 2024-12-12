import React, { useState, useEffect } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchRegister } from "../../../stores/features/authSlice";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [role, setRole] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [surnameIsEmpty, setSurnameIsEmpty] = useState(true);
  const [emailIsEmpty, setEmailIsEmpty] = useState(true);
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(true);
  const [rePasswordIsEmpty, setRePasswordIsEmpty] = useState(true);
  const [roleIsEmpty, setRoleIsEmpty] = useState(true);
  const [companyNameIsEmpty, setCompanyNameIsEmpty] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const [isWrong, setIsWrong] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  const dispatch = useDispatch<hrDispatch>();

  const doRegister = () => {
    setNameIsEmpty(name === "");
    setSurnameIsEmpty(surname === "");
    setEmailIsEmpty(email === "");
    setPasswordIsEmpty(password === "");
    setRoleIsEmpty(role === "");
    setCompanyNameIsEmpty(companyName === "");

    if (
      nameIsEmpty ||
      surnameIsEmpty ||
      emailIsEmpty ||
      passwordIsEmpty ||
      rePasswordIsEmpty ||
      roleIsEmpty ||
      companyNameIsEmpty
    ) {
      setIsEmpty(true);
      return;
    } else setIsEmpty(false);

    const payload = {
      name,
      surname,
      email,
      password,
      rePassword,
      role,
      companyName,
    };
    dispatch(fetchRegister(payload));
  };

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

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            nameIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Isim"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            surnameIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Soyisim"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            emailIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4 position-relative">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            passwordIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type={passwordVisible ? "text" : "password"}
                            className="form-control"
                            placeholder="Sifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i
                            className={`fas ${
                              passwordVisible ? "fa-eye-slash" : "fa-eye"
                            } position-absolute top-50 end-0 translate-middle-y me-3`}
                            style={{ cursor: "pointer" }}
                            onClick={togglePasswordVisibility}
                          ></i>
                        </div>
                      </div>
                      {isWrong ? (
                        <label className="text-danger fw-bold ms-5 mb-1">
                          * Şifreler uyuşmuyor
                        </label>
                      ) : null}
                      <div className="d-flex flex-row align-items-center mb-4 position-relative">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            rePasswordIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type={rePasswordVisible ? "text" : "password"}
                            className="form-control"
                            placeholder="Sifre Tekrar"
                            value={rePassword}
                            onChange={(e) => {
                              setRePassword(e.target.value);
                              setIsWrong(password !== e.target.value);
                            }}
                          />

                          <i
                            className={`fas ${
                              rePasswordVisible ? "fa-eye-slash" : "fa-eye"
                            } position-absolute top-50 end-0 translate-middle-y me-3`}
                            style={{ cursor: "pointer" }}
                            onClick={toggleRePasswordVisibility}
                          ></i>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-briefcase fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            roleIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Unvan"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-building fa-lg me-3 fa-fw"></i>
                        <div
                          className={`form-outline flex-fill mb-0 ${
                            companyNameIsEmpty ? "" : "border-danger"
                          }`}
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Sirket Adi"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
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
                    </form>
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
