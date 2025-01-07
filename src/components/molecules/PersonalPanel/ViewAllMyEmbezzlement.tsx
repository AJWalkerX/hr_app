import React from 'react'

function ViewAllMyEmbezzlement() {
  return (
    <div className='container'>
        <div className='text-center mb-4'>
            <h1>Üzerime Zimmetli Tüm Materyal</h1>
            <table className='table table-striped table-hover text-center'>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Ürün</th>
                        <th scope="col">Ürün Türü</th>
                        <th scope="col">Zimmet Tarihi</th>
                        
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default ViewAllMyEmbezzlement