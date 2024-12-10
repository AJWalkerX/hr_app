import React from 'react'
import './Header.css' 

function Header() {
  return (
    <div className="col title">
      <div className="row">
      <div className="col-3">
        <h1>Java İK</h1>
    </div>
    <div className="col-9">
        <div className="row">
        <div className="col">Uygulamalar</div>
        <div className="col">Danışmanlıklar</div>
        <div className="col">Kullanıcı Hikayeleri </div>
        <div className="col">Kaynaklar</div>
        <div className="col">Teklişf Al</div>
        <div className="col">Giriş Yap</div>
        </div>
    </div>

      </div>
    </div>
    
  
  )
}

export default Header