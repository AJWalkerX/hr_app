import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/ik-logo3.svg'
import './ManagerSidebar.css'
import { useDispatch } from 'react-redux';
import { hrDispatch } from '../../../stores';
import { logout } from '../../../stores/features/authSlice';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function ManagerSidebar() {

  const dispatch = useDispatch<hrDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <>
    <div  className="sidebar border-end shadow-lg sidebar-manager"
        style={{
          width: '300px',
          backgroundColor: '#f7f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '10px',
        }}>
      <div className="sidebar-header border-bottom mb-4">
        <div className="sidebar-brand text-center">
            <img style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                marginBottom: '10px',
                marginLeft: '30px'
              }}
              src={logo}
              alt="logo"/>
              <h4
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(10, 57, 129)',
                marginLeft: '25px'
              }}
            >
              Yönetici Bilgi Sistemi
            </h4>
                 
        </div>
      </div>
      <ul className="sidebar-nav">
  <li className="nav-item nav-group show">
    <ul className="nav-group-items">

      
    <li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager'}>
    <a className="nav-link d-flex align-items-center fw-bold" href="">
      <span
        className="nav-icon me-2"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <i className="fa-solid fa-house"></i>
      </span>{' '}
      DASHBOARD
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/employees'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-users-line"></span>
      </span>
      ÇALIŞANLAR
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/permit'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="bi bi-person-raised-hand"></span>
      </span>
      ÇALIŞAN İZİN TALEPLERİ
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/profile'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-user"></span>
      </span>
      PERSONEL BİLGİLERİ
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/permit-request'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-pen-to-square"></span>
      </span>
      İZİN OLUŞTUR
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/view-manager-permit'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-regular fa-calendar-days"></span>
      </span>
      İZİNLERİ GÖRÜNTÜLE
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/comment'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-regular fa-message"></span>
      </span>
      UYGULAMA DENEYİMİ
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/employees/spending-list'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-money-check-dollar"></span>
      </span>
      ÇALIŞAN HARCAMA <br /> TALEPLERİ
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/shift-request'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-users-gear"></span>
      </span>
      VARDİYA OLUŞTUR <br />
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className="nav-link-manager" to="/manager/shift-assignment">
    <a className="nav-link fw-bold" href="#">
      <span className="nav-icon">
        <AssignmentIndIcon style={{ color: 'rgb(10, 57, 129)', fontSize: '24px' }} />
      </span>
      VARDİYA ATAMA <br />
    </a>
  </NavLink>
</li>

<li className="nav-item">
  <NavLink className='nav-link-manager' to={'/manager/embezzlement'}>
    <a className="nav-link fw-bold" href="#">
      <span
        className="nav-icon"
        style={{
          color: 'rgb(10, 57, 129)',
          transition: 'color 0.3s',
        }}
      >
        <span className="fa-solid fa-clipboard-list"></span>
      </span>
      ZİMMET TAKİBİ <br />
    </a>
  </NavLink>
</li>

            
    </ul>
  </li>
</ul>
<div className="sidebar-footer border-top d-flex justify-content-center pt-3">
          <button
            className="btn btn-outline-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            style={{ width: '90%' }}
          >
            <i className="fa-solid fa-right-from-bracket me-2"></i>
            Çıkış Yap
          </button>
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
                onClick={handleLogout}
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

export default ManagerSidebar
