import React, { useEffect } from 'react'
import { IPersonalEmbezzlementResponse } from '../../../models/Response/IPersonalEmbezzlementResponse'
import { hrDispatch, hrUseSelector } from '../../../stores'
import { useDispatch } from 'react-redux';
import { fetchAssigmentEmbezzlement, fetchPersonalEmbezzlementList } from '../../../stores/features/embezzlementSlice';
import ViewAllMyEmbezzlementCard from '../../atoms/EmbezzlementCard/ViewAllMyEmbezzlementCard';

function ViewAllMyEmbezzlement() {
    const ViewAllMyEmbezzlementList : IPersonalEmbezzlementResponse[] = hrUseSelector((state)=> state.embezzlement.personalEmbezzlementList);
    const dispatch = useDispatch<hrDispatch>();
    useEffect(()=>{
        dispatch(fetchPersonalEmbezzlementList());
    },[dispatch]);
  return (
    <div className='container'>
        <div className='text-center mb-4'>
            <h1>Zimmetli  Materyaller</h1>
            <table className='table table-striped table-hover text-center mt-4'>
                <thead className='table-dark'>
                    <tr>
                        <th scope='col'></th>
                        <th scope="col">Ürün</th>
                        <th scope="col">Ürün Açıklaması</th>
                        <th scope="col">Zimmet Tarihi</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                    ViewAllMyEmbezzlementList.map((embezzlement, index) =>(
                        <tr key={index}>
                        <td>{index + 1}</td> {/* Satır numarası */}
                        <td>{embezzlement.title}</td>
                        <td>{embezzlement.description}</td>
                        <td>{new Date(embezzlement.assignmentDate).toLocaleDateString()}</td> {/* Date formatlama */}
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewAllMyEmbezzlement