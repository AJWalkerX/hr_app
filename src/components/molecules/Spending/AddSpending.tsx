import React from 'react';
import spendingLogo from "../../../img/SpendingLogo.png";

function AddSpending() {
  return (
    <>
    <div className="row justify-content-center">
        <img
          src={spendingLogo}
          style={{ width: "400px", height: "250px" }}
          alt="Permit Logo"
        />
      </div>

      <div className='row mb-4 text-center'>
        <h1 className='mt-5'>Harcamanızı Ekleyin</h1>
        <h5 className='mt-3'>Harcamanızı eklemek için Lütfen aşağıdaki bilgileri doldurunuz...</h5>
        <h6>Yöneticinizin harcamayı onaylaması durumunda ücret maaşınıza yansıyacaktır. Lütfen harcama durumunu Tüm Harcamalarım bölümünden takip ediniz</h6>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <form className="form-container mt-5">
            <div className="form-group">
                <label>Harcama Tarihi:</label>
                <input type="date" />
                
              </div>
              <div className="form-group">
                <label>Harcama Bilgisi:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Harcama Tutarı:</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Harcama Tipi:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="ACCOMMODATION"
                      
                      
                    />
                    Konaklama
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="MEAL"
                      
                    />
                    Yemek
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="TRANSACTION"
                     
                    />
                    Ulaşım
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="OFFICE_SUPPLIES"
                     
                    />
                    Ofis Malzemeleri
                  </label>
                  
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          <button
            style={{
              color: "white",
              width: "150px",
              borderRadius: "30px",
              marginLeft: "1000px",
            }}
            type="button"
            className="btn btn-success"
            >
            Harcamayı Ekle
          </button>
        </div>
      </div>
    </>
  )
}

export default AddSpending