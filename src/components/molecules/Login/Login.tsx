import React, { useState } from 'react';
import './Login.css'; // Stil dosyasını ayırmanızı öneririm.

function Login() {
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
                style={{ backdropFilter: 'blur(30px)' }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Logo Kolaysa İk</h2>
                  <form>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        
                      </div>
                      <div className="col-md-6 mb-4">
                        
                      </div>
                    </div>

                    {/* Email input */}
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder='Mail Adresiniz'
                      />
                    
                    </div>

                     {/* Password input */}
                     <div data-mdb-input-init className="form-outline mb-4 position-relative">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary position-absolute"
                        style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? 'Hide' : 'Show'}
                      </button>
                    </div>

                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example33"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Subscribe to our newsletter
                      </label>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-block mb-4"
                    >
                      Giriş Yap
                    </button>

                    
                  </form>
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
