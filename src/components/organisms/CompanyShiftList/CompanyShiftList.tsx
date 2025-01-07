import React, { useEffect } from "react";
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
  }, [dispatch]);

  return (
    <div>
      <h4 className="text-center my-4">Vardiya Listesi</h4>
      {shifts.length === 0 ? (
        <div
          className="alert alert-warning text-center mx-auto py-2 px-4"
          role="alert"
          style={{
            maxWidth: "600px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Atanmış Vardiya Bulunmamaktadır.
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default CompanyShiftList;
