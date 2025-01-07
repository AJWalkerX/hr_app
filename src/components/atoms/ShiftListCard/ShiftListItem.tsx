import React from "react";
import { IShiftListResponse } from "../../../models/Response/IShiftListResponse";
import { hrDispatch } from "../../../stores";
import { useDispatch } from "react-redux";
import {
  deleteShift,
  fetchDeleteShift,
} from "../../../stores/features/shiftPanelSlice";

function ShiftListItem(props: IShiftListResponse) {
  const { shiftId, shiftName, beginTime, endTime } = props;
  const dispatch = useDispatch<hrDispatch>();
  const handleDelete = async () => {
    await dispatch(fetchDeleteShift(shiftId));
    await dispatch(deleteShift(shiftId));
  };
  return (
    <tr>
      <td>{shiftName}</td>
      <td>{beginTime.toString()}</td>
      <td>{endTime.toString()}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-danger ms-3"
          style={{ color: "white" }}
        >
          Sil
        </button>
      </td>
    </tr>
  );
}

export default ShiftListItem;
