import React from 'react';
import { IManagerSpendingResponse } from '../../../models/Response/IManagerSpendingResponse';

function ManagerEmployeeSpendingCard(props: IManagerSpendingResponse) {
    return (
        <>
            {props.spendingDetails.map((spending, index) => (
                <tr key={index}>
                    {/* Avatar, ad, soyad, pozisyon her harcama detayında görünecek */}
                    <th scope="row" style={{ verticalAlign: "middle" }}></th> {/* İlk sütun boş kalacak */}
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
                        {props.position}
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
                            data-bs-target=""
                        >
                            Accept
                        </button>
                        <button
                            style={{ color: "white" }}
                            type="button"
                            className="btn btn-danger ms-3"
                            data-bs-target=""
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
