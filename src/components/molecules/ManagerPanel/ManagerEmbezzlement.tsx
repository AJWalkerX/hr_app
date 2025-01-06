import React from 'react'

function ManagerEmbezzlement() {
  return (
    <>
        <div className="row mt-4 ms-5">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Zimmet Takibi</p>
        </div>
        <div className="col-6"></div>
        <div className="col-3 d-flex">
          <button
            className="btn btn-outline-success my-2 my-sm-0 shadow-lg" 
            style={{fontWeight: 'bold'}}
            type="submit"
            data-bs-toggle="modal"
            data-bs-target="#newEmployeeModal"
          >
            + Materyal Ekle
          </button>
        </div>
      </div>
      <div className="row mt-5 me-5 ms-5" > 
        <table className="table align-middle mb-0 bg-white" >
          <thead className="table-dark"  >
            <tr>
              <th>Ürün</th>
              <th>Ürün Türü</th>
              <th>Ürün Durumu</th>
              <th>Detay/Düzenle</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManagerEmbezzlement