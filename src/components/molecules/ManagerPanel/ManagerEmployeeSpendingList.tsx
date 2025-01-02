import React from 'react'

function ManagerEmployeeSpendingList() {
    return (
        <div style={{ backgroundColor: "#e5e8e8" }} className="container">
          <div className="text-center mb-4">
            <h1>Harcama Yönetim Paneli</h1>
          </div>
          <table className="table table-striped table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">Personel</th>
                <th scope="col">Departman</th>
                <th scope="col">Harcama Tarihi</th>
                <th scope="col">Açıklama</th>
                <th scope="col">Harcama Türü</th>
                <th scope="col">İzin Değerlendirme Durumu</th>
              </tr>
            </thead>
            <tbody>
             
            </tbody>
          </table>
        </div>
      );
}

export default ManagerEmployeeSpendingList