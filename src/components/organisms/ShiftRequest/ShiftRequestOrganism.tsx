import React, { useState } from "react";
import Swal from "sweetalert2";
import "./ShiftRequestOrganism.css";
import shiftLogo from "../../../img/shift-icon.png";
import { ICreateShiftRequest } from "../../../models/Request/ICreateShiftRequest";
import { DateTime } from "luxon";
import { hrDispatch } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchCreateShift } from "../../../stores/features/shiftPanelSlice";

function ShiftRequestOrganism() {
  const [shifts, setShifts] = useState<ICreateShiftRequest[]>([]);
  const [tempStartTime, setTempStartTime] = useState<string>("");
  const [tempEndTime, setTempEndTime] = useState<string>("");
  const [tempShiftName, setTempShiftName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const calculateTotalTime = () => {
    return shifts.reduce((total, shift) => {
      const start = shift.shiftStart;
      const end = shift.shiftEnd;
      const duration = end.diff(start, "minutes").minutes;
      return total + duration;
    }, 0);
  };

  const handleAddShift = () => {
    if (!tempEndTime || !tempShiftName) {
      Swal.fire({
        title: "Hata!",
        text: "Bitiş saati ve vardiya adı girilmelidir!",
        icon: "error",
      });
      return;
    }

    const start =
      shifts.length > 0
        ? shifts[shifts.length - 1].shiftEnd
        : DateTime.fromFormat(tempStartTime, "HH:mm");

    const end = DateTime.fromFormat(tempEndTime, "HH:mm");

    if (end <= start) {
      Swal.fire({
        title: "Hata!",
        text: "Bitiş saati başlangıç saatinden önce olamaz!",
        icon: "error",
      });
      return;
    }

    const shiftDuration = end.diff(start, "minutes").minutes;
    const newTotalTime = calculateTotalTime() + shiftDuration;

    if (newTotalTime > 24 * 60) {
      Swal.fire({
        title: "Hata!",
        text: "Vardiyalar toplamda 24 saati geçemez.",
        icon: "error",
      });
      return;
    }

    const newShift: ICreateShiftRequest = {
      shiftName: tempShiftName,
      shiftStart: start,
      shiftEnd: end,
    };

    setShifts([...shifts, newShift]);
    setTempStartTime("");
    setTempEndTime("");
    setTempShiftName("");
    setErrorMessage("");
  };

  const dispatch = useDispatch<hrDispatch>();
  const handleSubmit = () => {
    const totalMinutes = calculateTotalTime();

    if (totalMinutes > 24 * 60) {
      setErrorMessage(
        "Vardiyalar toplam süresi 24 saati geçtiği için kayıt yapılamaz."
      );
      return;
    }

    dispatch(fetchCreateShift(shifts));
  };

  const handleDeleteShift = (index: number) => {
    Swal.fire({
      title: "Emin misiniz?",
      text: "Bu vardiyayı silmek istediğinizden emin misiniz?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Evet, Sil!",
      cancelButtonText: "Hayır, İptal",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedShifts = shifts.filter((_, i) => i !== index);
        setShifts(updatedShifts);
        setErrorMessage("");
      }
    });
  };

  return (
    <>
      <div className="shift-request-organism">
        <div className="row justify-content-center mt-2">
          <img
            src={shiftLogo}
            style={{ width: "350px", height: "300px" }}
            alt="Shift Logo"
          />
        </div>
        <h1 className="text-center mt-5">Vardiya Programı Oluşturma</h1>
        <h6 className="text-center mt-3">
          Vardiya eklemek için aşağıdaki bilgileri giriniz...
        </h6>

        <div className="form-container">
          <div className="form-group button-container-shift mt-3">
            <label>Başlangıç Saati:</label>
            <input
              type="time"
              value={tempStartTime}
              onChange={(e) => setTempStartTime(e.target.value)}
              disabled={shifts.length > 0}
            />
          </div>

          <div className="form-group button-container-shift">
            <label>Bitiş Saati:</label>
            <input
              type="time"
              value={tempEndTime}
              onChange={(e) => setTempEndTime(e.target.value)}
            />
          </div>

          <div className="form-group button-container-shift">
            <label>Vardiya Adı:</label>
            <input
              type="text"
              value={tempShiftName}
              onChange={(e) => setTempShiftName(e.target.value)}
              placeholder="Vardiya adı (örn: Sabah)"
            />
          </div>

          <div className="button-container-shift">
            <button
              onClick={handleAddShift}
              className="btn btn-outline-success custom-btn btn-shift-hover"
            >
              Vardiya Ekle
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-center">Vardiya Listesi</h4>
          <table className="table table-striped table-hover text-center">
            <thead className="table-gray">
              <tr>
                <th scope="col">Vardiya Zamanı</th>
                <th scope="col">Başlangıç Saati</th>
                <th scope="col">Bitiş Saati</th>
                <th scope="col">Düzenleme</th>
              </tr>
            </thead>
            <tbody>
              {shifts.map((shift, index) => (
                <tr key={index}>
                  <td>{shift.shiftName}</td>
                  <td>{shift.shiftStart.toFormat("HH:mm")}</td>
                  <td>{shift.shiftEnd.toFormat("HH:mm")}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteShift(index)}
                      className="btn btn-danger ms-3"
                      style={{ color: "white" }}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button
          onClick={handleSubmit}
          className=" btn custom-btn btn-success"
          style={{ color: "white" }}
          disabled={calculateTotalTime() > 24 * 60}
        >
          Planı Kaydet
        </button>
      </div>
    </>
  );
}

export default ShiftRequestOrganism;
