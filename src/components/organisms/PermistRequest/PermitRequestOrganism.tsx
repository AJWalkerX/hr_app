import React, { useState } from 'react';
import PermitRequest from '../../molecules/PermitRequest/PermitRequest';
import permitLogo from '../../../img/permitlogo.png';
import './PermitRequestOrganism.css';

function PermitRequestOrganism() {
  const [isPermitRequestVisible, setPermitRequestVisible] = useState(false);
  const [izinTipi, setIzinTipi] = useState('');


  const handleButtonClick = () => {
    setPermitRequestVisible(!isPermitRequestVisible);
  };

  const handleIzinTipiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIzinTipi(event.target.value);
  };

  return (
    <>
      <div className="row justify-content-center">
        <img src={permitLogo} style={{ width: '300px', height: '250px' }} alt="Permit Logo" />
      </div>
      <div className="row text-center">
        <h1>Personel İzin Formu</h1>
      </div>
      <div className="row">
        <div className="col">avatar</div>
        <div className="col">isim soyisim</div>
        <div className="col">pozisyon</div>
      </div>
      <div className="row">
        <button onClick={handleButtonClick}>
          {isPermitRequestVisible ? 'Hide Permit Request' : 'Show Permit Request'}
        </button>
        {isPermitRequestVisible && <PermitRequest />}
      </div>
      <div className="row">
        <div className="col">
          <div className="row mb-4">
            <h1 className='text-center mt-5'>İzin İstek Talep Formu</h1>
            <h6 className='text-center mt-3'>İzin talebinde bulunmak için lütfen aşağıdaki formu doldurunuz...</h6>
          </div>
          <div className="row">
            <form className="form-container">
              <div className="form-group">
                <label htmlFor="firstName">Adınız:</label>
                <input type="text" placeholder="Adınızı Giriniz" />
              </div>
              <div className="form-group">
                <label>Soyadınız:</label>
                <input type="text" placeholder="Soyadınızı Giriniz" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Telefon Numarası:</label>
                <input type="text" placeholder="Telefon Numaranızı Giriniz" />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Adresiniz:</label>
                <input type="email" placeholder="E-mail Adresinizi Giriniz" />
              </div>
              <div className="form-group">
                <label>İzin Başlangıç Tarihi</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>İzin Bitiş Tarihi</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>İzin Tipi:</label>
                <div >
                  <label>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Yıllık İzin"
                      checked={izinTipi === 'Yıllık İzin'}
                      onChange={handleIzinTipiChange}
                    />
                    Yıllık İzin
                  </label>
                  <label  className='ms-3'>
                    <input 
                      type="radio"
                      name="izinTipi"
                      value="Hastalık"
                      checked={izinTipi === 'Hastalık'}
                      onChange={handleIzinTipiChange}
                    />
                    Hastalık
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Mazeret İzni"
                      checked={izinTipi === 'Mazeret İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Mazeret İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Doğum İzni"
                      checked={izinTipi === 'Doğum İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Doğum İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Babalık İzni"
                      checked={izinTipi === 'Babalık İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Babalık İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Telafi İzni"
                      checked={izinTipi === 'Telafi İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Telafi İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Ücretsiz İzin"
                      checked={izinTipi === 'Ücretsiz İzin'}
                      onChange={handleIzinTipiChange}
                    />
                    Ücretsiz İzin
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Eğitim İzni"
                      checked={izinTipi === 'Eğitim İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Eğitim İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Acil Durum İzni"
                      checked={izinTipi === 'Acil Durum İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Acil Durum İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Diğer"
                      checked={izinTipi === 'Diğer'}
                      onChange={handleIzinTipiChange}
                    />
                    Diğer
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label >Yorum:</label>
                <textarea  placeholder="Yorumunuzu yazın..."></textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5 mb-5">
        <button style={{color:'white'}}type="button" className="btn btn-success">İzin Oluştur</button>
         </div>
      </div>
    </>
  );
}

export default PermitRequestOrganism;

