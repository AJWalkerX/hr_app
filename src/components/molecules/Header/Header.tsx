import React from 'react'
import './Header.css'
 

function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-color">
  <div className="container-fluid">
    <div className="col-4 text-center">
    <a className="navbar-brand ms-5" style={{fontWeight:'bold'}} href="#">JAVA İk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="col-8  ">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="btn btn-primary mx-2 ">Primary</button>
      <button type="button" className="btn btn-primary " >Primary </button>
    </div>
  </div>
    </div>
    
</nav>
    
    
  
  )
}

export default Header