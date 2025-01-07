import React from 'react'
import { IPersonalEmbezzlementResponse } from '../../../models/Response/IPersonalEmbezzlementResponse'

function ViewAllMyEmbezzlementCard(props:IPersonalEmbezzlementResponse) {
  return (
    <tr>
    <td style={{ verticalAlign: "middle" }}>{props.title}</td>

    <td style={{ verticalAlign: "middle" }}>{props.description}</td>
    <td style={{ verticalAlign: "middle" }}>
      {" "}
      {new Date(props.assignmentDate).toLocaleDateString("tr-TR")}
    </td>
    </tr>
  )
}

export default ViewAllMyEmbezzlementCard