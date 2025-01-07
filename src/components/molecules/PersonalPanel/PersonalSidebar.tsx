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
      <div
        className="sidebar border-end shadow-lg sidebar-manager"
        style={{
          width: '300px',
          backgroundColor: '#f7f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          padding: '10px',
        }}
      >
        <div className="sidebar-header border-bottom mb-4">
          <div className="sidebar-brand text-center">
            <img
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                marginBottom: '10px',
              }}
              src={logo}
              alt="logo"
            />
            <h4
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(10, 57, 129)',
              }}
            >
              Personel Bilgi Sistemi
            </h4>
          </div>
        </div>
        <ul className="sidebar-nav">
          <li className="nav-item mb-3">
            <NavLink className="nav-link-manager" to={'/personal'}>
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

          <li className="nav-item mb-3">
            <NavLink className="nav-link-manager" to={'/personal/profile'}>
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-user"></i>
                </span>{' '}
                PERSONEL BİLGİLERİ
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink
              className="nav-link-manager"
              to={'/personal/permit-request'}
            >
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </span>{' '}
                İZİN OLUŞTUR
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink
              className="nav-link-manager"
              to={'/personal/view-your-permit'}
            >
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-regular fa-calendar-days"></i>
                </span>{' '}
                İZİNLERİ GÖRÜNTÜLE
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink className="nav-link-manager" to={'/personal/add-spending'}>
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-money-check-dollar"></i>
                </span>{' '}
                HARCAMA EKLE
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink
              className="nav-link-manager"
              to={'/personal/view-my-spending'}
            >
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-money-check-dollar"></i>
                </span>{' '}
                TÜM HARCAMALARIM
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink
              className="nav-link-manager"
              to={'/personal/view-my-embezzlement'}
            >
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-clipboard-list"></i>
                </span>{' '}
                ZİMMETLİ MATERYALLER
              </a>
            </NavLink>
          </li>

          <li className="nav-item mb-3">
            <NavLink className="nav-link-manager" to={'/personal/shift-list'}>
              <a className="nav-link d-flex align-items-center fw-bold" href="">
                <span
                  className="nav-icon me-2"
                  style={{
                    color: 'rgb(10, 57, 129)',
                    transition: 'color 0.3s',
                  }}
                >
                  <i className="fa-solid fa-user-clock"></i>
                </span>{' '}
                PERSONEL VARDİYALARI
              </a>
            </NavLink>
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
                style={{ color: 'white' }}
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
