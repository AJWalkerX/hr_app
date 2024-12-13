import React from "react";
import { useNavigate } from "react-router-dom";
import './NavButton.css'

interface ButtonProps {
    text: 'KAYIT OL' | 'GİRİŞ YAP',
    cls: string,
}

function Button(props: ButtonProps) {
    const navigate = useNavigate();

    const buttonClicked = () => {
        switch (text) {
            case 'KAYIT OL': 
                navigate('/register'); 
                break;
            case 'GİRİŞ YAP': 
                navigate('/login'); 
                break;
        }
    }

    const { text, cls } = props;

    return (

        <>
        <input className={`btn ${cls} mx-2`} type="button"  value={text}  onClick={buttonClicked}/>
            
        
        </>
        
        
    );
}

export default Button;
