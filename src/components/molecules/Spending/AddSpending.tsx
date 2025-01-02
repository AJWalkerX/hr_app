import React, { useState } from 'react';
import spendingLogo from "../../../img/SpendingLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { hrDispatch, hrState } from '../../../stores';
import { IAddPersonalSpendingRequest } from '../../../models/Request/IAddPersonalSpendingRequest';
import { fetchAddSpending } from '../../../stores/features/spendingSlice';
import Swal from 'sweetalert2';

function AddSpending() {
  const dispatch = useDispatch<hrDispatch>();
  const isLoading = useSelector((state: hrState) => state.spending.isAddSpendingLoading);

  const [description, setDescription] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [spendingDate, setSpendingDate] = useState("");
  const [spendingType, setSpendingType] = useState("");

  const handleHarcamaTipiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpendingType(event.target.value);
  };

  const handleSubmit = () => {
    if (description.trim() === "" || billAmount.trim() === "" || spendingType === "" || spendingDate === "") {
      alert("Lütfen tüm alanları doldurun");
      return;
    }
  
    const payload: IAddPersonalSpendingRequest = {
      description,
      billAmount: Number(billAmount),
      spendingDate: new Date(spendingDate),
      spendingType,
    };
  
    dispatch(fetchAddSpending(payload))
      .then(() => {
        Swal.fire({
          title: "Başarılı!",
          text: "Harcama talebiniz başarıyla kaydedildi.",
          icon: "success",
          confirmButtonText: "Tamam",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Hata!",
          text: "Harcama talebiniz kaydedilemedi. Lütfen tekrar deneyin.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      });
  };
  

  return (
    <>
      <div className="row justify-content-center">
        <img
          src={spendingLogo}
          style={{ width: "400px", height: "250px" }}
          alt="Spending Logo"
        />
      </div>

      <div className="row mb-4 text-center">
        <h1 className="mt-5">Harcamanızı Ekleyin</h1>
        <h5 className="mt-3">Harcamanızı eklemek için Lütfen aşağıdaki bilgileri doldurunuz...</h5>
        <h6>
          Yöneticinizin harcamayı onaylaması durumunda ücret maaşınıza yansıyacaktır. Lütfen harcama
          durumunu Tüm Harcamalarım bölümünden takip ediniz.
        </h6>
      </div>

      <div className="row">
        <div className="col">
          <div className="row">
            <form className="form-container mt-5" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Harcama Tarihi:</label>
                <input
                  type="date"
                  value={spendingDate}
                  onChange={(e) => setSpendingDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Harcama Bilgisi:</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Harcama Tutarı:</label>
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Harcama Tipi:</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="ACCOMMODATION"
                      checked={spendingType === "ACCOMMODATION"}
                      onChange={handleHarcamaTipiChange}
                    />
                    Konaklama
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="MEAL"
                      checked={spendingType === "MEAL"}
                      onChange={handleHarcamaTipiChange}
                    />
                    Yemek
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="TRANSACTION"
                      checked={spendingType === "TRANSACTION"}
                      onChange={handleHarcamaTipiChange}
                    />
                    Ulaşım
                  </label>
                  <label className="ms-3">
                    <input
                      type="radio"
                      name="harcamaTipi"
                      value="OFFICE_SUPPLIES"
                      checked={spendingType === "OFFICE_SUPPLIES"}
                      onChange={handleHarcamaTipiChange}
                    />
                    Ofis Malzemeleri
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
                style={{
                  color: "white",
                  width: "150px",
                  borderRadius: "30px",
                  marginLeft: "1000px",
                }}
               
              >
                Harcamayı Ekle
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSpending;
