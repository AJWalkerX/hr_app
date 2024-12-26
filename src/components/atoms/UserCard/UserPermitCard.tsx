import React from "react";
import { IUserPermitResponse } from "../../../models/Response/IUserPermitResponse";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import {
  fetchPermitAuthorisation,
  removeUserFromPermitList,
} from "../../../stores/features/managerPanelSlice";

function UserPermitCard(props: IUserPermitResponse) {
  const dispatch = useDispatch<hrDispatch>();
  const doApprove = () => {
    const answer = "Approved";
    dispatch(removeUserFromPermitList(props.userId));
    dispatch(
      fetchPermitAuthorisation({
        userId: props.userId,
        workHolidayId: props.workHolidayId,
        answer,
      })
    );
  };
  const doReject = () => {
    const answer = "Rejected";
    dispatch(removeUserFromPermitList(props.userId));
    dispatch(
      fetchPermitAuthorisation({
        userId: props.userId,
        workHolidayId: props.workHolidayId,
        answer,
      })
    );
  };
  return (
    <tr>
      <th scope="row " style={{ verticalAlign: "middle" }}>
        {props.userId}
      </th>
      <td style={{ verticalAlign: "middle" }}>
        <img
          src={props.avatar}
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          alt="Avatar"
        />
      </td>
      <td style={{ verticalAlign: "middle" }}>
        <>
          {props.firstName} {props.lastName}
        </>
      </td>
      <td style={{ verticalAlign: "middle" }}>{props.position}</td>
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

      <td style={{ verticalAlign: "middle" }}>
        <button
          style={{ color: "white" }}
          type="button"
          className="btn btn-success"
          data-bs-target={`#user${props.userId}`}
          onClick={() => doApprove()}
        >
          Accept
        </button>
        <button
          style={{ color: "white" }}
          type="button"
          className="btn btn-danger ms-3"
          data-bs-target={`#user${props.userId}`}
          onClick={() => doReject()}
        >
          Denied
        </button>
      </td>
    </tr>
  );
}

export default UserPermitCard;
