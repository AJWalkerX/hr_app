import React, { useEffect } from "react";
import { DateTime } from "luxon";
import { IMyShiftResponse } from "../../../models/Response/IMyShiftResponse";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchGetAllMyShifts } from "../../../stores/features/shiftPanelSlice";

function PersonalShiftList() {
  const dispatch = useDispatch<hrDispatch>();
  const myShiftList: IMyShiftResponse[] = hrUseSelector(
    (state) => state.shift.myShift
  );

  useEffect(() => {
    dispatch(fetchGetAllMyShifts());
  }, [dispatch]);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2
          style={{
            textAlign: "center",
            color: "#2a3d66",
            fontWeight: "bold",
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            margin: "0",
            marginLeft: "150px",
            marginTop: "30px",
          }}
        >
          Personel Vardiya Listesi
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "-50px",
        }}
      >
        {myShiftList.map((shift, index) => {
          // Eğer StartDate ve endDate, Date nesnesi değilse, doğrudan ISO string'e çeviriyoruz
          const startDate =
            typeof shift.StartDate === "string"
              ? DateTime.fromISO(shift.StartDate)
              : DateTime.fromJSDate(shift.StartDate);

          const endDate =
            typeof shift.endDate === "string"
              ? DateTime.fromISO(shift.endDate)
              : DateTime.fromJSDate(shift.endDate);

          return (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                width: "700px",
                minHeight: "250px",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                flexShrink: "0",
                textAlign: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
            >
              <h3
                style={{
                  fontSize: "1.4em",
                  color: "#333",
                  fontWeight: "bold",
                }}
              >
                {shift.shiftName}
              </h3>
              <p
                style={{
                  fontSize: "1.1em",
                  color: "#777",
                  marginBottom: "15px",
                }}
              >
                Başlangıç:{" "}
                {shift.startTime
                  ? DateTime.fromISO(shift.startTime).toFormat("HH:mm")
                  : "Bilgi mevcut değil"}
              </p>
              <p
                style={{
                  fontSize: "1.1em",
                  color: "#777",
                  marginBottom: "15px",
                }}
              >
                Bitiş:{" "}
                {shift.endTime
                  ? DateTime.fromISO(shift.endTime).toFormat("HH:mm")
                  : "Bilgi mevcut değil"}
              </p>

              <h4
                style={{
                  fontSize: "1.2em",
                  color: "#2a3d66",
                  fontWeight: "bold",
                }}
              >
                Tarihler:
              </h4>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li
                  style={{
                    fontSize: "1em",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  {startDate.isValid
                    ? startDate.toFormat("dd.MM.yyyy")
                    : "Geçersiz Tarih"}{" "}
                  -{" "}
                  {endDate.isValid
                    ? endDate.toFormat("dd.MM.yyyy")
                    : "Geçersiz Tarih"}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalShiftList;
