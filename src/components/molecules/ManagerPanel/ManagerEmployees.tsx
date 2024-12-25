import React from 'react'
import CustomerCard from '../../atoms/CustomerCard/CustomerCard'

function ManagerEmployees() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Çalışanlar</p>
        </div>
        <div className="col-5"></div>
        <div className="col-4 d-flex">
          
        <button
  className="btn btn-outline-secondary my-2 my-sm-0"
  style={{ backgroundColor: '#85c1e9', color: 'white' }}
  type="submit"
>
  + Çalışan Ekle
</button>
        </div>
      </div>
      <div className="row mt-5">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Foto</th>
              <th>İsim</th>
              <th>Soyisim</th>
              <th>Email</th>
              <th>Pozisyon</th>
              <th>Düzenle</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
                  
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManagerEmployees