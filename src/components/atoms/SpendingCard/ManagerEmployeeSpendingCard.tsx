import React, { useState, useEffect } from 'react';
import { IManagerSpendingResponse } from '../../../models/Response/IManagerSpendingResponse';
import { useDispatch, useSelector } from 'react-redux';
import { hrDispatch, hrState, hrUseSelector } from '../../../stores';
import { fetchAuthorizeSpending, fetchEmployeeListBySpending, removeEmployeeFromSpendingList } from '../../../stores/features/managerPanelSlice';

interface SpendingDetails {
    spendingDate: Date;
    description: string;
    spendingType: string;
    spendingId: number;
    billAmount: number;
}

function ManagerEmployeeSpendingCard(props: IManagerSpendingResponse) {
    const dispatch = useDispatch<hrDispatch>();

    // Redux store'dan employee listesi
    const employeeList = useSelector((state: hrState) => state.manager.employeeSpendingList);

    // Onay ve reddetme işlemleri
    const doApprove = async (spendingId: number) => {
        const answer = "Approved";
        
        // Kullanıcıyı harcama listeden çıkar
        dispatch(removeEmployeeFromSpendingList(props.userId));

        // Harcama onayı için dispatch işlemi
        dispatch(
            fetchAuthorizeSpending({
                userId: props.userId,
                spendingId: spendingId, // spendingId parametresi doğru şekilde gönderildi
                answer: answer
            })
        );

        // Güncel employee listesi alındıktan sonra sayfa renderlanır
        await dispatch(fetchEmployeeListBySpending());
    };

    const doReject = async (spendingId: number) => {
        const answer = "Rejected";
        
        // Kullanıcıyı harcama listeden çıkar
        dispatch(removeEmployeeFromSpendingList(props.userId));

        // Harcama reddetme işlemi
        dispatch(
            fetchAuthorizeSpending({
                userId: props.userId,
                spendingId: spendingId, // spendingId parametresi doğru şekilde gönderildi
                answer: answer
            })
        );

        // Güncel employee listesi alındıktan sonra sayfa renderlanır
        await dispatch(fetchEmployeeListBySpending());
    };

    // Verilerin değiştiğini izlemek için useEffect
    useEffect(() => {
        if (employeeList.length === 0) {
            // Eğer employeeList boşsa, sayfa render'ı yapılır
        }
    }, [employeeList]);

    return (
        <>
            {props.spendingDetails.map((spending, index) => (
                <tr key={index}>
                    <th scope="row" style={{ verticalAlign: "middle" }}></th> 
                    <td style={{ verticalAlign: "middle" }}>
                        <img
                            src={props.avatar}
                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                            alt="Avatar"
                        />
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        {props.firstName} {props.lastName}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        {spending.billAmount}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        {new Date(spending.spendingDate).toLocaleDateString("tr-TR")}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        {spending.description}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        {spending.spendingType}
                    </td>
                    <td style={{ verticalAlign: "middle" }}>
                        <button
                            style={{ color: "white" }}
                            type="button"
                            className="btn btn-success"
                            data-bs-target={`#user${props.userId}`}
                            onClick={() => doApprove(spending.spendingId)} // onClick'e harcama id'sini ekledik
                        >
                            Accept
                        </button>
                        <button
                            style={{ color: "white" }}
                            type="button"
                            className="btn btn-danger ms-3"
                            data-bs-target={`#user${props.userId}`}
                            onClick={() => doReject(spending.spendingId)} // onClick'e harcama id'sini ekledik
                        >
                            Denied
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default ManagerEmployeeSpendingCard;
