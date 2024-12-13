import React, { useState, useEffect } from "react";
import logo from "../../../img/ik-logo2.svg"; // Varsayılan logo
import logoScrolled from "../../../img/ik-logo.svg"; // Scroll yapıldığında kullanılacak logo
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
  const [logoToUse, setLogoToUse] = useState(logo); // Scroll durumuna göre logo'yu değiştirecek state

  const [isHovered, setIsHovered] = useState(false); // Hover durumunu takip etmek için state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setTextColor("rgb(10, 57, 129)");
        setButtonStyle({
          color: "white",
          borderColor: "rgb(10, 57, 129)",
          backgroundColor: "transparent", // Arka planı sabit tutuyoruz
        });
        setLogoToUse(logoScrolled); // Scroll yapıldığında farklı logo'yu kullan
      } else {
        setBgColor("transparent");
        setTextColor("white");
        setButtonStyle({
          color: "white",
          borderColor: "white",
          backgroundColor: "transparent", // Arka planı sabit tutuyoruz
        });
        setLogoToUse(logo); // Scroll yapılmadığında varsayılan logoyu kullan
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hover durumunda buton stilini değiştirmeme
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col p-0">
      <nav
        className={`navbar navbar-expand-lg ${
          bgColor === "white" ? "bg-white" : "bg-transparent"
        }`}
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="container">
          <a className="navbar-brand d-flex align-items-center ms-5" href="#">
            <img
              src={logoToUse} // Burada logo'yu scroll durumuna göre değiştiriyoruz
              alt="Logo"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span
              style={{ fontWeight: "bold", fontSize: "40px", color: textColor }}
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
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                  style={{
                    fontWeight:'bold',
                    color: textColor,
                    transition: "color 0.3s",
                  }}
                >
                  Ana Sayfa
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    fontWeight:'bold',
                    color: textColor,
                    transition: "color 0.3s",
                  }}
                >
                  Uygulamalar
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    fontWeight:'bold',
                    color: textColor,
                    transition: "color 0.3s",
                  }}
                >
                  Danışmanlıklar
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{
                    fontWeight:'bold',
                    color: textColor,
                    transition: "color 0.3s",
                  }}
                >
                  Kullanıcı Hikayeleri
                </a>
              </li>
            </ul>
            {/* Giriş Yap Butonuna özel style ile */}
            <NavButtons/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
