import React from 'react'
import './Footer.css'

function Footer() {
  return (
  <div className="container">
    <div className="row">
      <div className="col-4">
        <div className="row mt-5">
          Kolay İK
        </div>
        <div className="row mt-5">
        Mesa Koz Sahrayıcedit Mah. Atatürk Cad. N:69 K:5 D:81 Kadıköy / İstanbul / Türkiye
        +90 212 951 06 61
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
          <button type="button" className="btn-footer"><i className="fa-brands fa-google-play"></i></button>
          </div>
          <div className="col-auto">
          <button type="button" className="btn-footer"><i className="fa-brands fa-apple"></i></button>
          </div>
        </div>
        <div className="row">
          
        </div>
        <div className="row">
        </div>
      </div>
      <div className="col-8">
        <div className="row mt-5">
          <div className="col tight-lines">
            <h5>Ürün</h5> 
            <p className='underline-on-hover'>Personel </p>
            <p className='underline-on-hover'>Bordro</p> 
            <p className='underline-on-hover'>Performans</p>
            <p className='underline-on-hover'>Vardiya</p> 
            <p className='underline-on-hover'>Ücret Değerledirme</p> 
            <p className='underline-on-hover'>İşe Alım ve Aday Takip</p> 
            <p className='underline-on-hover'>Bordro Danışmanlığı</p> 
            <p className='underline-on-hover'>Performans Danışmanlığı</p> 
            <p className='underline-on-hover'>Fiyatlar</p> 
            <p className='underline-on-hover'>Ücretsiz Deneyin</p> 
          </div>
          <div className="col">
            <h5>Kaynaklar</h5> 
            <p className='underline-on-hover'>Destek </p>
            <p className='underline-on-hover'>Blog</p> 
            <p className='underline-on-hover'> E-Kitaplar</p> 
            <p className='underline-on-hover'> Webinarlar</p> 
            <p className='underline-on-hover'> Kullanıcı Hikayeleri</p> 
            <p className='underline-on-hover'> İKahve</p> 
            <p className='underline-on-hover'>Hesaplama Araçları</p> 
            <p className='underline-on-hover'>Mevzuat</p>
            <p className='underline-on-hover'>İK Raporu</p> 
            <p className='underline-on-hover'>Kolay Akademi</p>  
          </div>
          <div className="col">
            
          <div className="col">
            <h5>Kaynaklar</h5> 
            <p className='underline-on-hover'>Hakkımızda</p>
            <p className='underline-on-hover'>Kariyer</p> 
            <p className='underline-on-hover'>İletişim</p> 
            <p className='underline-on-hover'>Medya</p> 
            <p className='underline-on-hover'>Dijital Köprü</p> 
            <p className='underline-on-hover'>Güncellemeler</p> 
            <p className='underline-on-hover'>Çerez Tercihleri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <p>icon koyulacak</p>
    </div>
    <div className="row">
      <div className="col ">
      <i className="social-media-icon fa-brands fa-linkedin-in"></i>
      <i className="social-media-icon fa-brands fa-x-twitter"></i>
      <i className="social-media-icon fa-brands fa-youtube"></i>
      <i className="social-media-icon fa-brands fa-instagram"></i>
      <i className="social-media-icon fa-brands fa-facebook-f"></i>
      </div>
      <div className="col text-center">
        <h5 className='underline-on-hover'>Sözleşmeler ve Politikalar</h5>
      </div>
      <div className="col icon-text">
      <i className="me-1 fa-regular fa-copyright"></i>
      <span>2024 Kolaysa İK Yazılım A.Ş.</span>
      </div>
    </div>
  </div>

  )
}

export default Footer