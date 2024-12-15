import React, { useState, useEffect } from "react";
import logo from "../../../img/ik-logo2.svg";
import logoScrolled from "../../../img/ik-logo.svg";
import "./Header.css";
import NavButtons from "../../molecules/NavButton/NavButtons";

function Header() {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [buttonStyle, setButtonStyle] = useState({
    color: "white",
    borderColor: "white",
    backgroundColor: "transparent",
  });
  const [logoToUse, setLogoToUse] = useState(logo);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setTextColor("rgb(10, 57, 129)");
        setButtonStyle({
          color: "rgb(10, 57, 129)",
          borderColor: "rgb(10, 57, 129)",
          backgroundColor: "transparent",
        });
        setLogoToUse(logoScrolled);
      } else {
        setBgColor("transparent");
        setTextColor("white");
        setButtonStyle({
          color: "white",
          borderColor: "white",
          backgroundColor: "transparent",
        });
        setLogoToUse(logo);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="col p-0">
      <nav
        className={`navbar navbar-expand-lg ${
          bgColor === "white" ? "bg-white" : "bg-transparent"
        }`}
        style={{ transition: "background-color 0.3s ease" }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center ms-5" href="/">
            <img
              src={logoToUse}
              alt="Logo"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                color: textColor,
                transition: "color 0.3s",
              }}
            >
              KolaysaİK
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              {/* Uygulamalar Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontWeight: "bold", color: textColor }}
                >
                  Uygulamalar
                </a>
                
                <ul className="dropdown-menu">
                <div className="row">
                  
                </div>
                  <li>
                    <a className="dropdown-item" href="#">
                      Uygulama 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Uygulama 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Uygulama 3
                    </a>
                  </li>
                </ul>
              </li>

              {/* Danışmanlıklar Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontWeight: "bold", color: textColor }}
                >
                  Danışmanlıklar
                </a>
                <ul className="dropdown-menu ">
                  <div className="row d-flex flex-direction-column">
                  <li className="col">
                    <a className="dropdown-item" href="#">
                      <div className="row "><p style={{fontWeight:'bold'}}>Performans Değerlendirma Danışmanlığı</p>
                      <p style={{fontWeight:'lighter',paddingBottom:'5px'}}>Kurgudan sonuç analizine kadar tüm danışmanlık ihtiyacınız için danışmmanlık hizmetimizden yaralanın</p>
                   </div>              
                    </a>
                  </li>
                  <hr style={{margin:'0px',padding:'0px'}}/>
                  <li className="col">
                    <a className="dropdown-item " href="#">
                      <div className="row "><p style={{fontWeight:'bold'}}>İK Danışmanlığı</p>
                      <p style={{fontWeight:'lighter'}}>İyileştirme ihtiyacı duyduğunuz İK süreçleriniz için kendi danışmanlık paketinizi oluşturun</p>
                   </div>              
                    </a>
                  </li>
                  </div>
                
                </ul>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ fontWeight: "bold", color: textColor }}
                >
                  Kullanıcı Hikayeleri
                </a>
              </li>
            </ul>
            <NavButtons buttonStyle={buttonStyle} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
