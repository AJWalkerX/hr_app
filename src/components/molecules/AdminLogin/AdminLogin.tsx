import React, { useState } from "react";
import "./AdminLogin.css"; // Özel CSS dosyasını bağlayabilirsiniz
import { NavLink, useNavigate } from "react-router-dom";
import { hrDispatch } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchAdminLogin } from "../../../stores/features/adminAuthSlice";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch<hrDispatch>();
  const [username, setUsername]= useState('');
  const [password, setPassword] = useState('');
  const doAdminLogin = () =>{
  dispatch(fetchAdminLogin({username,password})).then(data=>{
    if(data.payload.code === 200){
      navigate('/admin')
    }
  })  
  }
  return (

    <section className="vh-100-admin gradient-custom-admin">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-admin bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body-admin p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">GİRİŞ</h2>
                  <p className="text-white-50 mb-5">
                    Lütfen Kullanıcı Adı ve Şifrenizi Giriniz!
                  </p>

                  <div className="form-outline-admin form-white mb-4">
                    <input
                      value={username}
                      onChange={e => {setUsername(e.target.value)}}
                      type="text"
                      id="typeTextX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typeTextX">
                      Kullanıcı Adı
                    </label>
                  </div>

                  <div className="form-outline-admin form-white mb-4">
                    <input
                      value={password}
                      onChange={e => {setPassword(e.target.value)}}
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Şifre
                    </label>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-white-50" href="#!">
                      Şifremi unuttum?
                    </a>
                  </p>

                  
                  <button onClick={doAdminLogin}
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Giriş Yap
                  </button>
                  
                </div>

                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminLogin;
