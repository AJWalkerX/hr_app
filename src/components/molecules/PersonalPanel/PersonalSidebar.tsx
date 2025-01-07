import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/ik-logo3.svg';
import { useDispatch } from 'react-redux';
import { hrDispatch } from '../../../stores';
import { logout } from '../../../stores/features/authSlice';

function PersonalSidebar() {
  const dispatch = useDispatch<hrDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/login';
  };

  return (
    <>
      <div className="sidebar border-end sidebar-manager" style={{width:'300px', backgroundColor: '#e5e8e8' }}>
        <div className="sidebar-header border-bottom">
          <div className="sidebar-brand">
            <img
              style={{ width: '60px', height: '60px', alignItems: 'center' }}
              src={logo}
              alt="logo"
            />
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '18px',
                color: 'rgb(10, 57, 129)',
              }}
            >
              Personel Bilgi Sistemi
            </span>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item nav-group show">
            <ul className="nav-group-items">
              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal'}>
                <a className='nav-link fw-bold' href=''>
                <span className="nav-icon ">
                    <span
                      style={{ color: 'rgb(10, 57, 129)' }}
                      className="fa-solid fa-house"
                    ></span>
                  </span>{' '}
                  DASHBOARD
                </a>
                 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/profile'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)' }}
                      className="fa-solid fa-user"
                    ></span>
                  </span>{' '}
                  PERSONEL BİLGİLERİ
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/permit-request'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)' }}
                      className="fa-solid fa-pen-to-square"
                    ></span>
                  </span>{' '}
                  İZİN OLUŞTUR
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/view-your-permit'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)' }}
                      className="fa-regular fa-calendar-days"
                    ></span>
                  </span>{' '}
                  İZİNLERİ GÖRÜNTÜLE
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/add-spending'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)'}}
                      className="fa-solid  fa-money-check-dollar"
                    ></span>
                  </span>{' '}
                  HARCAMA EKLE
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/view-my-spending'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)'}}
                      className="fa-solid  fa-money-check-dollar"
                    ></span>
                  </span>{' '}
                  TÜM HARCAMALARIM
                  </a>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link-manager" to={'/personal/view-my-embezzlement'}>
                <a className='nav-link fw-bold' href=''>
                  <span className="nav-icon">
                    <span
                      style={{ color: 'rgb(10, 57, 129)'}}
                      className="fa-solid fa-clipboard-list"
                    ></span>
                  </span>{' '}
                  ÜZERİME ZİMMETLENENLER
                  </a>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidebar-footer border-top d-flex">
          <button
            className="sidebar-toggler sidebar-exit-button-m"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            type="button"
          ></button>
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
              <p>Çıkış Yapmak istediğinizden emin misiniz?</p>
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
  );
}

export default PersonalSidebar;