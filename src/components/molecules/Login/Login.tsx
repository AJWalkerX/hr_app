import React, { useState } from "react";
import "./Login.css"; // Stil dosyasını ayırmanızı öneririm.
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchLogin } from "../../../stores/features/authSlice";
import Swal from "sweetalert2";
import { title } from "process";

function Login() {
  const dispatch = useDispatch<hrDispatch>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = () => {
    const payload = {
      email,
      password,
    };
    if (payload.email === "" || payload.password === "") {
      Swal.fire({
        icon: "error",
        title: "Hata!",
        text: "Mail adresi veya parola boş bırakılamaz.",
      });
      return;
    }
    dispatch(fetchLogin(payload));
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {/* Section: Design Block */}
      <section className="text-center text-lg-start">
        <style>
          {`
            .cascading-right {
              margin-right: -50px;
            }

            @media (max-width: 991.98px) {
              .cascading-right {
                margin-right: 0;
              }
            }
          `}
        </style>

        {/* Jumbotron */}
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right bg-body-tertiary"
                style={{ backdropFilter: "blur(30px)" }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Logo Kolaysa İk</h2>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4"></div>
                    <div className="col-md-6 mb-4"></div>
                  </div>

                  {/* Email input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      placeholder="Mail Adresiniz"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password input */}
                  <div
                    data-mdb-input-init
                    className="form-outline mb-4 position-relative"
                  >
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="form3Example4"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary position-absolute"
                      style={{
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={doLogin}
                  >
                    Giriş Yap
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                className="w-100 rounded-4 shadow-4"
                alt="Sample"
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Login;
