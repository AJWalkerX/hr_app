import React, { useEffect } from 'react'
import { IPersonalSpendingResponse } from '../../../models/Response/IPersonalSpendingResponse'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { useDispatch } from 'react-redux';
import { fetchGetPersonalSpendingList } from '../../../stores/features/spendingSlice';
import ViewAllMySpendingCard from '../../atoms/SpendingCard/ViewAllMySpendingCard';

function ViewAllMySpending() {
  const ViewAllMySpendingCardList : IPersonalSpendingResponse[] = hrUseSelector((state) => state.spending.spendingList);
  const dispatch =  useDispatch<hrDispatch>();
  useEffect(()=>{
    dispatch(fetchGetPersonalSpendingList());
  },[dispatch]);
  return (
    <div  className="container">
    <div className="text-center mb-4">
      <h1>Tüm Harcamalarım</h1>
    </div>
    <table className="table table-striped table-hover text-center">
      <thead className="table-dark">
        <tr>
          <th scope="col">Harcama Tarihi</th>
          <th scope="col">Harcama Bilgisi</th>
          <th scope="col">Harcama Tutarı</th>
          <th scope="col">Harcama Tipi</th>
          <th scope="col">Onay Durumu</th>
        </tr>
      </thead>
      <tbody>
        {
      ViewAllMySpendingCardList.map((spending, index)=>(
        <ViewAllMySpendingCard
        key={index}
        spendingDate={spending.spendingDate}
        description={spending.description}
        billAmount={spending.billAmount}
        spendingType={spending.spendingType}
        spendingState={spending.spendingState}
                />
      ))

    }
      </tbody>
    </table>
  </div>
   )
}

export default ViewAllMySpending