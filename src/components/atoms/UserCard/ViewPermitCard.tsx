import React from 'react'
import { IUserPermitViewResponse } from '../../../models/Response/IUserPermitViewResponse';

function ViewPermitCard(props:IUserPermitViewResponse) {
  return (
    <tr>
   
    <td style={{ verticalAlign: "middle" }}>
      {" "}
      {new Date(props.beginDate).toLocaleDateString("tr-TR")}
    </td>
    <td style={{ verticalAlign: "middle" }}>
      {" "}
      {new Date(props.endDate).toLocaleDateString("tr-TR")}
    </td>
    <td style={{ verticalAlign: "middle" }}>{props.description}</td>

    <td style={{ verticalAlign: "middle" }}>{props.holidayType}</td>
    <td style={{ verticalAlign: "middle" }}>{props.holidayState}</td>
  </tr>
  );
}

export default ViewPermitCard