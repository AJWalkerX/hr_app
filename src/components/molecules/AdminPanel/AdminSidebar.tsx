import React from 'react'
import './AdminSidebar.css'
import logo from '../../../img/ik-logo2.svg'
function AdminSidebar() {
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
        <a className="nav-link fw-bold" href="#">
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-house"></span></span> ANASAYFA
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link fw-bold" href="#">
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-users-line"></span></span> MÜŞTERİLER
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link fw-bold" href="#">
          <span className="nav-icon"><span style={{color: 'rgb(10, 57, 129)'}} className="fa-solid fa-hourglass-half"></span></span> ONAY BEKLEYENLER
        </a>
      </li>

    </ul>
  </li>
</ul>
      <div className="sidebar-footer border-top d-flex">
        <button className="sidebar-toggler" type="button"></button>
      </div>
    </div>
    </>
  )
}

export default AdminSidebar
