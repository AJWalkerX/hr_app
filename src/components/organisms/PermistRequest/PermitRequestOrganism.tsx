import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PermitRequest from '../../molecules/PermitRequest/PermitRequest';
import permitLogo from '../../../img/permitlogo.png';
import './PermitRequestOrganism.css';
import { fetchUserPermitCreate } from '../../../stores/features/userPanelSlice';
import { hrDispatch, hrUseSelector } from '../../../stores';
import { IUserPermitRequest } from '../../../models/Request/IUserPermitRequest';
import Swal from 'sweetalert2';

function PermitRequestOrganism() {
  const [isPermitRequestVisible, setPermitRequestVisible] = useState(false);
  const [userId, setUserId] = useState<number>(0);
  const [beginDate, setBeginDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [holidayType, setHolidayType] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch<hrDispatch>();

  const { isUserCreatePermitLoading, userCreatePermit } = hrUseSelector((state) => state.userpanel);

  const handleButtonClick = () => {
    setPermitRequestVisible(!isPermitRequestVisible);
  };

  const handleIzinTipiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHolidayType(event.target.value);
  };



 
  
  const handleFormSubmit = () => {
    const beginDate = new Date();
    const endDate = new Date();
  
    const permitRequest: IUserPermitRequest = {
      userId,
      beginDate,
      endDate,
      holidayType,
      description,
    };
  
    // İzin isteğini oluştur
    dispatch(fetchUserPermitCreate(permitRequest))
      .then(() => {
        // Başarılı işlem sonrası SweetAlert bildirimi
        Swal.fire({
          title: "İzin Talebiniz Oluşturuldu",
          icon: "success",
        });
      })
      .catch((error) => {
        // Hata durumunda başka bir mesaj gösterebilirsiniz
        Swal.fire({
          title: "Hata!",
          text: "İzin oluşturulurken bir sorun oluştu.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="row justify-content-center">
        <img src={permitLogo} style={{ width: '300px', height: '250px' }} alt="Permit Logo" />
      </div>

      <div className="row mb-4">
        <h1 className='text-center mt-5'>İzin İstek Talep Formu</h1>
        <h6 className='text-center mt-3'>İzin talebinde bulunmak için lütfen aşağıdaki bilgileri doldurunuz...</h6>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <form className="form-container">
            <div className="form-group">
                <label>İzin Başlangıç Tarihi:</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>İzin Bitiş Tarihi:</label>
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
                      checked={holidayType === 'Yıllık İzin'}
                      onChange={handleIzinTipiChange}
                    />
                    Yıllık İzin
                  </label>
                  <label  className='ms-3'>
                    <input 
                      type="radio"
                      name="izinTipi"
                      value="Hastalık"
                      checked={holidayType === 'Hastalık'}
                      onChange={handleIzinTipiChange}
                    />
                    Hastalık
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Mazeret İzni"
                      checked={holidayType === 'Mazeret İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Mazeret İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Doğum İzni"
                      checked={holidayType === 'Doğum İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Doğum İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Babalık İzni"
                      checked={holidayType === 'Babalık İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Babalık İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Telafi İzni"
                      checked={holidayType === 'Telafi İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Telafi İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Ücretsiz İzin"
                      checked={holidayType === 'Ücretsiz İzin'}
                      onChange={handleIzinTipiChange}
                    />
                    Ücretsiz İzin
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Eğitim İzni"
                      checked={holidayType === 'Eğitim İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Eğitim İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Acil Durum İzni"
                      checked={holidayType === 'Acil Durum İzni'}
                      onChange={handleIzinTipiChange}
                    />
                    Acil Durum İzni
                  </label>
                  <label className='ms-3'>
                    <input
                      type="radio"
                      name="izinTipi"
                      value="Diğer"
                      checked={holidayType === 'Diğer'}
                      onChange={handleIzinTipiChange}
                    />
                    Diğer
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label >Açıklama:</label>
              </div>
              <div className="form-group">
                <label>Açıklama:</label>
                <textarea
                  placeholder="Açıklamanızı yazın..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <button
            style={{ color: 'white', width: '150px', borderRadius: '30px', marginLeft: '1100px' }}
            type="button"
            className="btn btn-success"
            onClick={handleFormSubmit}
            disabled={isUserCreatePermitLoading}
          >
            {isUserCreatePermitLoading ? 'İzin Oluşturuluyor...' : 'İzin Oluştur'}
          </button>
        </div>
      </div>

      {userCreatePermit && (
        <div>
          <h3>İzin Talebi Oluşturuldu</h3>
          <p>İzin Tipi:{userCreatePermit.beginDate?.toLocaleDateString()}</p>
          <p>Başlangıç Tarihi: {userCreatePermit.endDate?.toLocaleDateString()}</p>
          <p>Bitiş Tarihi: {userCreatePermit.holidayType}</p>
          <p>Açıklama: {userCreatePermit.description}</p>
        </div>
      )}
    </>
  );
}

export default PermitRequestOrganism;
