import React from "react";
import Button from "../../atoms/NavButton/NavButton";
import './NavButtons'



function NavButtons() {
  return (
    <div className="d-flex justify-content-end">
     
      <Button cls="nav-button-register" text="KAYIT OL"  />
      
      
      <Button cls="nav-button-login" text="GİRİŞ YAP"  />
    </div>
  );
}

export default NavButtons;
