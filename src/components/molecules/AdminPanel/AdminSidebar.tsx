import React from 'react'
import './AdminSidebar.css'
import logo from '../../../img/ik-logo2.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { hrDispatch } from '../../../stores'
import { adminLogin, adminLogout } from '../../../stores/features/adminAuthSlice'
function AdminSidebar() {
  const dispatch = useDispatch<hrDispatch>();
  
  const logout = async()=>{
    await localStorage.removeItem('adminToken');
    dispatch(adminLogout());
  }

  
  return (
    <>
    <div className="sidebar border-end sidebar-admin">
      <div className="sidebar-header border-bottom">
        <div className="sidebar-brand">
            <img style={{width: '80px',height: '80px'}} 
            src={logo}/><span style={{fontWeight: 'bold',fontSize: '22px',color: 'rgb(10, 57, 129)'}}>
                Kolaysa İK Admin Arayüzü</span>
        </div>
      </div>
      <ul className="sidebar-nav">
  <li className="nav-item nav-group show">
    <ul className="nav-group-items">

      
      <li className="nav-item">
        <NavLink className='nav-link-admin' to={'/admin'}>
        <a className="nav-link fw-bold" href="#"  >
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-house"></span></span> ANASAYFA
        </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className='nav-link-admin' to={'/admin/customers'}>
        <a className="nav-link fw-bold"  href="#">
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-users-line"></span></span> MÜŞTERİLER
        </a>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className='nav-link-admin' to={'/admin/wait-customers'}>
        <a className="nav-link fw-bold" href="#"   >
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-hourglass-half"></span></span> ONAY BEKLEYENLER
        </a>
        </NavLink>
      </li>

    </ul>
  </li>
</ul>
      <div className="sidebar-footer border-top d-flex" >
        <button className="sidebar-toggler sidebar-exit-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button"></button>
      </div>
    </div>

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
                Çıkış Yapılıyor...
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
             <p>
              Çıkış Yapmak istediğinizden emin misiniz?
             </p>
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
                className="btn btn-danger"
                style={{color:'white'}}
                onClick={logout}
                data-bs-dismiss="modal"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
