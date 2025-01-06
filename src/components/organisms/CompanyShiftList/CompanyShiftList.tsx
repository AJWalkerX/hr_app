import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { IShiftListResponse } from "../../../models/Response/IShiftListResponse";
import { fetchShiftList } from "../../../stores/features/shiftPanelSlice";
import ShiftListItem from "../../atoms/ShiftListCard/ShiftListItem";

function CompanyShiftList() {
  const dispatch = useDispatch<hrDispatch>();

  const shifts: IShiftListResponse[] = hrUseSelector(
    (state) => state.shift.shiftList
  );

  useEffect(() => {
    dispatch(fetchShiftList());
  }, []);

  return (
    <div>
      <div>
        <h4 className="text-center">Vardiya Listesi</h4>
        <table className="table table-striped table-hover text-center">
          <thead className="table-gray">
            <tr>
              <th
                scope="col"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Vardiya Zamanı
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Başlangıç Saati
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Bitiş Saati
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Düzenle
              </th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift, index) => (
              <ShiftListItem key={index} {...shift} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyShiftList;
