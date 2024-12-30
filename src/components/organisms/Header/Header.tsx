import React, { useState, useEffect } from "react";
import logo from "../../../img/ik-logo2.svg";
import logoScrolled from "../../../img/ik-logo.svg";
import "./Header.css";
import NavButtons from "../../molecules/NavButton/NavButtons";
import { useNavigate } from "react-router-dom";

// Kartlar için veriler
function Header() {
  const navigate = useNavigate();
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

  // Kartlar için içerik verisi
  const appcards = [
    {
      title: 'Personel Yönetimi',
      description: 'Çalışanlarınızın tüm yönetim süreçlerini kolayca takip edin.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b539458e093011715772_group-10%20(3).svg',
      linkUrl: '#'
    },
    {
      title: 'Bordro Yönetimi',
      description: 'Bordro ve maaş işlemlerinizi hızlı ve güvenli bir şekilde yönetin.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6717b86616ee16efc14e6252_bordro%20icon.svg',
      linkUrl: '#'
    },
    {
      title: 'Performans Yönetimi',
      description: 'Çalışan performanslarını ölçün ve geliştirme fırsatları oluşturun.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b6c1afed4f887b9abb86_group-8%20(3).svg',
      linkUrl: '#'
    },
    {
      title: 'İşe Alım ve Aday Takip',
      description: 'Adayları hızlıca değerlendirin ve işe alım sürecini yönetin.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/66c4ff4bc3c8acd906e30f7b_talentii.svg',
      linkUrl: '#'
    },
    {
      title: 'Vardiya Yönetimi',
      description: 'Vardiya planlaması yapın ve çalışanların çalışma saatlerini yönetin.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6113b6b76e2094438bf1f37c_group-9%20(3).svg',
      linkUrl: '#'
    },
    {
      title: 'Ücret Yönetimi',
      description: 'Ücret planlamalarınızı oluşturun ve çalışan ödemelerini yönetin.',
      image: 'https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/66c5f3f54ff100f5618fc390_analitikv1.svg',
      linkUrl: '#'
    }
  ];

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
                  <div className="d-flex">
                    {appcards.slice(0, 3).map((app, index) => (
                      <li className="px-2" key={index}>
                        <a className="dropdown-item" href={app.linkUrl}>
                          <img src={app.image} alt={app.title} style={{ width: '30px', marginRight: '10px' }} />
                          {app.title}
                          <p style={{ fontSize: '12px', color: '#777' }}>{app.description}</p>
                        </a>
                      </li>
                    ))}
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="d-flex">
                    {appcards.slice(3, 6).map((app, index) => (
                      <li className="px-2" key={index}>
                        <a className="dropdown-item" href={app.linkUrl}>
                          <img src={app.image} alt={app.title} style={{ width: '30px', marginRight: '10px' }} />
                          {app.title}
                          <p style={{ fontSize: '12px', color: '#777' }}>{app.description}</p>
                        </a>
                      </li>
                    ))}
                  </div>
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
                        <div className="row ">
                          <p style={{ fontWeight: "bold" }}>
                            Performans Değerlendirma Danışmanlığı
                          </p>
                          <p
                            style={{
                              fontWeight: "lighter",
                              paddingBottom: "5px",
                            }}
                          >
                            Kurgudan sonuç analizine kadar tüm danışmanlık
                            ihtiyacınız için danışmmanlık hizmetimizden
                            yaralanın
                          </p>
                        </div>
                      </a>
                    </li>
                    <hr style={{ margin: "0px", padding: "0px" }} />
                    <li className="col">
                      <a className="dropdown-item " href="#">
                        <div className="row ">
                          <p style={{ fontWeight: "bold" }}>İK Danışmanlığı</p>
                          <p style={{ fontWeight: "lighter" }}>
                            İyileştirme ihtiyacı duyduğunuz İK süreçleriniz için
                            kendi danışmanlık paketinizi oluşturun
                          </p>
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
                  onClick={() => navigate("/comment/list")} // Yönlendirme işlemi
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
