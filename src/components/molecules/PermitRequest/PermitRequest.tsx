import React from 'react'
import PermitRequestAtom from '../../atoms/PermitRequest.tsx/PermitRequestAtom'
function PermitRequest() {
  return (
    <>
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Personel İzin Talep Geçmişi </h2>
      </div>
      <table className="table table-striped table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>

            <th scope="col">İzin Başlangıç Tarihi</th>
            <th scope="col">İzin Bitiş Tarihi</th>
            <th scope="col">İzin Türü</th>
            <th scope="col">İzin Acıklaması</th>
            <th scope="col">İzin Durumu</th>
           
          </tr>
        </thead>
        <tbody>
          
           
        </tbody>
      </table>
    </div>
  
    
    </>
  )
}

export default PermitRequest