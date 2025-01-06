import React from "react";
import { IShiftListResponse } from "../../../models/Response/IShiftListResponse";

function ShiftListItem(props: IShiftListResponse) {
  const { shiftId, shiftName, beginTime, endTime } = props;
  console.log(props);
  return (
    <tr>
      <td>{shiftName}</td>
      <td>{beginTime.toString()}</td>
      <td>{endTime.toString()}</td>
      <td>
        <button
          onClick={() => shiftId}
          className="btn btn-danger ms-3"
          style={{ color: "white" }}
        >
          Sil
        </button>

        <button className="btn btn-secondary ms-3" style={{ color: "white" }}>
          Düzenle
        </button>
      </td>
    </tr>
  );
}

export default ShiftListItem;
