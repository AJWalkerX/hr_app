import React from 'react'
import { IPersonalSpendingResponse } from '../../../models/Response/IPersonalSpendingResponse'

function ViewAllMySpendingCard(props:IPersonalSpendingResponse) {
  return (
    <tr>
        <td style={{ verticalAlign: "middle" }}>
      {" "}
      {new Date(props.spendingDate).toLocaleDateString("tr-TR")}
    </td>
    <td style={{ verticalAlign: "middle" }}>{props.description}</td>

    <td style={{ verticalAlign: "middle" }}>{props.billAmount}</td>

    <td style={{ verticalAlign: "middle" }}>{props.spendingType}</td>
    <td style={{ verticalAlign: "middle" }}>{props.spendingState}</td>
    </tr>
  );
}

export default ViewAllMySpendingCard