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
                marginLeft: '24px'
              }}
              src={logo}
              alt="logo"
            />
            <h4
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(10, 57, 129)',
                marginLeft:'25px'
              }}
            >
              Personel Bilgi Sistemi
            </h4>
          </div>
        </div>
        <ul className="sidebar-nav">

          <li className="nav-item mt-3">
                  <NavLink  to={'/personal'}  className={({ isActive }) => isActive ? 'active-page' : ''} end style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
               
                  {({ isActive }) => (
                <>
                  <i
                    className="fa-solid fa-house"
                    style={{
                      color: isActive ? 'white' : 'rgb(10, 57, 129)', 
                      marginRight: '8px',
                    }}
                  ></i>
                 DASHBOARD
                </>
              )}
                  </NavLink>
                </li>

           <li className="nav-item mt-3">
                  <NavLink  to={'/personal/profile'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
               
                  {({ isActive }) => (
                <>
                  <i
                    className="fa-solid fa-user"
                    style={{
                      color: isActive ? 'white' : 'rgb(10, 57, 129)', 
                      marginRight: '8px',
                    }}
                  ></i>
                  PERSONEL BİLGİLERİ
                </>
              )}
                  </NavLink>
                </li>

             <li className="nav-item mt-3">
                     <NavLink  to={'/personal/permit-request'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
                  
                     {({ isActive }) => (
                   <>
                     <i
                       className="fa-solid fa-pen-to-square"
                       style={{
                         color: isActive ? 'white' : 'rgb(10, 57, 129)', 
                         marginRight: '8px',
                       }}
                     ></i>
                     İZİN OLUŞTUR
                   </>
                 )}
                     </NavLink>
                   </li>
             
        
           <li className="nav-item mt-3">
                  <NavLink  to={'/personal/view-your-permit'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
               
                  {({ isActive }) => (
                <>
                  <i
                    className="fa-regular fa-calendar-days"
                    style={{
                      color: isActive ? 'white' : 'rgb(10, 57, 129)', 
                      marginRight: '8px',
                    }}
                  ></i>
                 İZİNLERİ GÖRÜNTÜLE
                </>
              )}
                  </NavLink>
                </li>
        
<li className="nav-item mt-3">
        <NavLink  to={'/personal/add-spending'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
     
        {({ isActive }) => (
      <>
        <i
          className="fa-solid fa-money-check-dollar"
          style={{
            color: isActive ? 'white' : 'rgb(10, 57, 129)', 
            marginRight: '8px',
          }}
        ></i>
        HARCAMA EKLE
      </>
    )}
        </NavLink>
      </li>
      
         <li className="nav-item mt-3">
                <NavLink  to={'/personal/view-my-spending'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
             
                {({ isActive }) => (
              <>
                <i
                  className="fa-solid fa-money-check-dollar"
                  style={{
                    color: isActive ? 'white' : 'rgb(10, 57, 129)', 
                    marginRight: '8px',
                  }}
                ></i>
                TÜM HARCAMALARIM
              </>
            )}
                </NavLink>
              </li>
          
<li className="nav-item mt-3">
        <NavLink  to={'/personal/view-my-embezzlement'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
     
        {({ isActive }) => (
      <>
        <i
          className="fa-solid fa-clipboard-list"
          style={{
            color: isActive ? 'white' : 'rgb(10, 57, 129)', 
            marginRight: '8px',
          }}
        ></i>
         ZİMMETLİ MATERYALLER
      </>
    )}
        </NavLink>
      </li>




      <li className="nav-item mt-3">
        <NavLink  to={'/personal/shift-list'}  className={({ isActive }) => isActive ? 'active-page' : ''}  style={{textDecoration:'none', fontWeight:'bold', color:'rgb(10, 57, 129)'}}>
     
        {({ isActive }) => (
      <>
        <i
          className="fa-solid fa-user-clock"
          style={{
            color: isActive ? 'white' : 'rgb(10, 57, 129)', 
            marginRight: '8px',
          }}
        ></i>
          PERSONEL VARDİYALARI
      </>
    )}
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
