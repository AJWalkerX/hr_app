import React, { useEffect, useState } from "react";
import "./Login.css"; // Stil dosyasını ayırmanızı öneririm.
import { useDispatch } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import logo from "../../../img/ik-logo2.svg";
import { fetchLogin } from "../../../stores/features/authSlice";
import { fetchForgotPassword } from "../../../stores/features/forgotPasswordSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ILoginResponse } from "../../../models/Response/ILoginResponse";

function Login() {
  const [logoToUse, setLogoToUse] = useState(logo);
  const isAuth = hrUseSelector((state) => state.auth.isAuth);
  const loginResponse: ILoginResponse | null = hrUseSelector(
    (state) => state.auth.loginResponse
  );
  const dispatch = useDispatch<hrDispatch>();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordEmail, setForgotPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (isAuth && loginResponse) {
      if (loginResponse.isFirstLogin && loginResponse.position === "MANAGER") {
        navigate("/user-information");
      } else if (
        loginResponse.position === "MANAGER" &&
        !loginResponse.isFirstLogin
      ) {
        navigate("/manager");
      } else if (loginResponse.position !== "MANAGER") {
        navigate("/personal");
      }
    }
  }, [isAuth, loginResponse, navigate]);

  const doLogin = async () => {
    const payload = { email, password };
    await dispatch(fetchLogin(payload));
  };

  const doForgotPassword = () => {
    if (forgotPasswordEmail === "") {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Mail adresi boş bırakılamaz.",
      });
      return;
    } else if (!forgotPasswordEmail.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Gecersiz mail adresi girdiniz.",
      });
      return;
    }

    dispatch(fetchForgotPassword({ forgotPasswordEmail }));
  };

  return (
    <>
      <section className="vh-100 ">
        <div className="container-fluid body-login-bg-color">
          <div className="row align-items-center" style={{ height: "100vh" }}>
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4 text-center">
                <div className="row justify-content-center align-items-center">
                  <div className="col-3"></div>
                  <div className="col-1">
                    <img
                      src={logoToUse}
                      alt=""
                      width={"50px"}
                      height={"50px"}
                    />
                  </div>
                  {/* <i
                  className="fa-solid fa-person-through-window fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#fcfcfd" }}
                ></i> */}
                  <div className="col-4 ms-4">
                    <span className="h1 fw-bold mb-0 text-color-login">
                      Giriş Paneli
                    </span>
                  </div>
                  <div className="col"></div>
                </div>
              </div>

              <div className="d-flex px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 justify-content-center">
                <form style={{ width: "23rem" }}>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div
                    data-mdb-input-init
                    className="form-outline mb-4 position-relative"
                  >
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="form2Example28"
                      className="form-control form-control-lg"
                      placeholder="Password"
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

                  <div className="pt-1 row">
                    <button
                      className="btn btn-outline-light btn-lg"
                      type="button"
                      onClick={doLogin}
                    >
                      Login
                    </button>
                    <div className="col text-end mt-3">
                      <p className="small mb-5 pb-lg-2 text-color-login">
                        <a
                          className=" text-color-login"
                          href="#!"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Forgot password?
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://app.kolayik.com/assets/images/kolay-payroll.svg "
                alt="Login image"
                width={"700px"}
              />
              <div className="px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 col-9 text-center">
                <span className="h1 fw-bold mb-0 text-color-login-2">
                  Bordronun artık kolayı var!
                </span>
                <p className="text-color-login-2 mt-3">
                  Kolay İK Bordro, kullanıcı dostu tasarımı, hatasız hesaplama
                  yeteneği ve yasal uyumuyla ay sonu bordro stresini ortadan
                  kaldırıyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Sifre Sifirlama
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Mail Adresinizi Giriniz"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPassword(e.target.value)}
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
                onClick={doForgotPassword}
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

export default Login;
