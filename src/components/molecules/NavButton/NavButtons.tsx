import React from "react";
import Button from "../../atoms/NavButton/NavButton";
import './NavButtons.css';

// ButtonStyle için bir arayüz tanımlayalım
interface ButtonStyleProps {
    color?: string;
    borderColor?: string;
    backgroundColor?: string;
}

function NavButtons({ buttonStyle }: { buttonStyle?: ButtonStyleProps }) {
    return (
        <div className="d-flex justify-content-end">
            <Button 
                cls="nav-button-register" 
                text="KAYIT OL"
                style={buttonStyle}
            />
            <Button 
                cls="nav-button-login" 
                text="GİRİŞ YAP"
                style={buttonStyle}
            />
        </div>
    );
}

export default NavButtons;