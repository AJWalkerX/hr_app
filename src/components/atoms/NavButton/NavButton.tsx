import React from "react";
import { useNavigate } from "react-router-dom";
import './NavButton.css'

interface ButtonProps {
    text: 'KAYIT OL' | 'GİRİŞ YAP',
    cls: string,
    style?: React.CSSProperties // Stil için optional prop ekledik
}

function Button(props: ButtonProps) {
    const navigate = useNavigate();

    const buttonClicked = () => {
        switch (props.text) {
            case 'KAYIT OL':
                navigate('/register');
                break;
            case 'GİRİŞ YAP':
                navigate('/login');
                break;
        }
    }

    // Stil için varsayılan değerler
    const defaultStyle: React.CSSProperties = {
        transition: 'all 0.3s ease',
        color: 'white',
        borderColor: 'white',
        backgroundColor: 'transparent'
    };

    // Gelen style propunu defaultStyle ile birleştir
    const buttonStyle = { ...defaultStyle, ...props.style };

    return (
        <input 
            className={`btn ${props.cls} mx-2`} 
            type="button"  
            value={props.text}  
            onClick={buttonClicked}
            style={buttonStyle}
        />
    );
}

export default Button;