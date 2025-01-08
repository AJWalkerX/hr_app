import React, { useEffect } from 'react';
import { IManagerSpendingResponse } from '../../../models/Response/IManagerSpendingResponse';
import { hrDispatch, hrUseSelector } from '../../../stores';
import { useDispatch } from 'react-redux';
import { fetchEmployeeListBySpending } from '../../../stores/features/managerPanelSlice';
import ManagerEmployeeSpendingCard from '../../atoms/SpendingCard/ManagerEmployeeSpendingCard';

function ManagerEmployeeSpendingList() {
    const managerEmployeeSpendingCardList: IManagerSpendingResponse[] = hrUseSelector((state) => state.manager.employeeSpendingList);
    const dispatch = useDispatch<hrDispatch>();

    useEffect(() => {
        dispatch(fetchEmployeeListBySpending());
    }, [dispatch]);

    return (
        <div  className="container">
            <div className="text-center mb-4">
                <h1>Harcama Yönetim Paneli</h1>
            </div>
            <table className="table table-striped table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Personel</th>
                        <th scope="col">Harcama Tutarı</th>
                        <th scope="col">Harcama Tarihi</th>
                        <th scope="col">Açıklama</th>
                        <th scope="col">Harcama Türü</th>
                        <th scope="col">İzin Değerlendirme Durumu</th>
                    </tr>
                </thead>
                <tbody>
                    {managerEmployeeSpendingCardList.map((employee, index) => (
                        <ManagerEmployeeSpendingCard
                            key={index}
                            userId={employee.userId}
                            companyId={employee.companyId}
                            avatar={employee.avatar}
                            firstName={employee.firstName}
                            lastName={employee.lastName}
                            spendingDetails={employee.spendingDetails} // Harcama detayları burada ekleniyor
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ManagerEmployeeSpendingList;
