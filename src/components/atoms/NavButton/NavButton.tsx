import React from "react";
import { useNavigate } from "react-router-dom";
import { text } from "stream/consumers";
interface buttonProps{
    text: 'TEKLİF ALIN'| 'GİRİŞ YAP',
    cls: String
}
function Button( props:buttonProps ) {
    const navigate =useNavigate ();
    const buttonClicked = () =>{
        switch(text)
    }
  return (
    <button type="button" className={className} style={style}>
      {label}
    </button>
  );
}

export default Button;