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
        switch(text){
          case 'TEKLİF ALIN': navigate('/register'); break;
          case 'GİRİŞ YAP' : navigate('/login')
        }
    }
    const {text, cls} = props
  return (
    <>
        <input className={'btn ' + cls} type="button" value={text} onClick={buttonClicked} />    
    
    </>

  
  );
}

export default Button;