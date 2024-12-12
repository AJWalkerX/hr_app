import React, { useState } from "react";
import "./Login.css"; // Stil dosyasını ayırmanızı öneririm.
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchLogin } from "../../../stores/features/authSlice";
import Swal from "sweetalert2";

function Login() {
  const dispatch = useDispatch<hrDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const doLogin = () => {
    const payload = {
      email,
      password,
    };
    if (payload.email === "" || payload.password === "") {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Mail adresi veya parola boş bırakılamaz.",
      });
      return;
    }
    dispatch(fetchLogin(payload));
  };

  return (
    <>
      <section className="vh-100 ">
        <div className="container-fluid body-login-bg-color">
          <div className="row align-items-center">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4 text-center">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>
                <span className="h1 fw-bold mb-0 text-color-login">Logo</span>
              </div>

              <div className="d-flex align-items-center px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 justify-content-center">
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
                        <a className=" text-color-login" href="#!">
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
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image"
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPosition: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
