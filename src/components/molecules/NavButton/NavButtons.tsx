import React from 'react'
import NavButton from '../../atoms/NavButton/NavButton'

function NavButtons() {
  return (
    <div>
        <div className="col">
            <NavButton cls='nav-button-register' text='TEKLİF ALIN' />
        </div>

        <div className="col">
          <NavButton cls='nav-button-login' text='GİRİŞ YAP'/>
        </div>
    </div>
  )
}

export default NavButtons