import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hrDispatch, hrUseSelector } from "../../../stores";
import {
  fetchAssignmentShift,
  fetchCreateShift,
  fetchShiftList,
} from "../../../stores/features/shiftPanelSlice";
import logo from "../../../img/shift-logo.svg";
import { Autocomplete, TextField } from "@mui/material";
import { IShiftListResponse } from "../../../models/Response/IShiftListResponse";
import { ICreateShiftRequest } from "../../../models/Request/ICreateShiftRequest";
import { IAssignShiftRequest } from "../../../models/Request/IAssignShiftRequest";
import PersonalShiftList from "../../organisms/PersonalShiftList/PersonalShiftList";
import Swal from "sweetalert2";

function AssingmentShift() {
  const shiftList: IShiftListResponse[] = hrUseSelector(
    (state) => state.shift.shiftList
  );
  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fetchShiftList());
  }, []);

  const shiftOptions = shiftList.map((shift) => ({
    label: `${shift.shiftName} (${shift.beginTime} - ${shift.endTime})`,
    id: shift.shiftId,
  }));
  const [selectedShiftId, setSelectedShiftId] = useState<number | null>(null);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const [personalList, setPersonalList] = useState<IAssignShiftRequest[]>([]);
  const handlePersonalShiftsChange = () => {
    if (!selectedShiftId) {
      Swal.fire({
        title: "Hata!",
        text: "Vardiya seciniz",
        icon: "error",
      });
      return;
    }

    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === ""
    ) {
      Swal.fire({
        title: "Hata!",
        text: "Personel bilgilerini eksiksiz doldurunuz",
        icon: "error",
      });
      return;
    }

    if (startDate > endDate) {
      Swal.fire({
        title: "Hata!",
        text: "Gecerli bir tarih seciniz",
        icon: "error",
      });
      return;
    }
    if (endDate < startDate) {
      Swal.fire({
        title: "Hata!",
        text: "Gecerli bir tarih seciniz",
        icon: "error",
      });
      return;
    }

    const newShift: IAssignShiftRequest = {
      shiftId: selectedShiftId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      startDate: startDate,
      endDate: endDate,
    };
    setPersonalList([...personalList, newShift]);
  };

  const handleDeletePersonalShift = (index: number) => {
    const updatedPersonalList = [...personalList];
    updatedPersonalList.splice(index, 1);
    setPersonalList(updatedPersonalList);
  };

  const handleSubmit = () => {
    if (personalList.length === 0) {
      Swal.fire({
        title: "Hata!",
        text: "Personel bilgilerini eksiksiz doldurunuz",
        icon: "error",
      });
      return;
    }
    dispatch(fetchAssignmentShift(personalList));
  };

  return (
    <>
      <div className="shift-request-organism mt-5">
        <div className="row justify-content-center mt-2">
          <img
            src={logo}
            style={{ width: "350px", height: "300px" }}
            alt="Shift Logo"
          />
        </div>
        <h1 className="text-center mt-5">Vardiya Programı Atama</h1>
        <h5 className="text-center mt-3">
          Personel bilgilerini girerek vardiya programınızı
          olusturabilirsiniz...
        </h5>
        <h6 className="text-center mt-3" style={{color:'red'}}>
            Lütfen büyük/Küçük harf duyarlılığına dikkat ediniz
        </h6>

        <div className="form-container mt-5">
          <div className="row justify-content-center">
            {/* Sol Kolon: Personel Bilgileri */}
            <div className="col-md-5">
              <h5 className="text-center mb-4">Personel Bilgileri</h5>
              <div className="form-group mb-3">
                <TextField
                  placeholder="Çalışan Adı"
                  type="text"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <TextField
                  placeholder="Çalışan Soyadı"
                  type="text"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <TextField
                  placeholder="Çalışan Email"
                  type="email"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Sağ Kolon: Vardiya Bilgileri */}
            <div className="col-md-5">
              <h5 className="text-center mb-4">Vardiya Bilgileri</h5>
              <div className="form-group mb-3">
                <TextField
                  id="Baslangic Tarihi"
                  label="Başlangıç Tarihi"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                />
              </div>
              <div className="form-group mb-3">
                <TextField
                  id="Bitis Tarihi"
                  label="Bitiş Tarihi"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="small"
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                />
              </div>
              <div className="form-group mb-3">
                <Autocomplete
                  options={shiftOptions}
                  getOptionLabel={(option) => option.label} // Gösterilecek label
                  onChange={(event, newValue) => {
                    if (newValue && newValue.id) {
                      setSelectedShiftId(newValue.id);
                    } else {
                      setSelectedShiftId(null);
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Vardiya"
                      variant="outlined"
                      size="small"
                    />
                  )}
                  fullWidth
                />
              </div>
            </div>
            <div className="text-center ">
              <button
                className="btn btn-primary custom-btn"
                onClick={handlePersonalShiftsChange}
              >
                Ekle
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-center">Vardiya Listesi</h4>
          <table className="table table-striped table-hover text-center">
            <thead className="table-gray">
              <tr>
                <th scope="col">Adı</th>
                <th scope="col">Soyadı</th>
                <th scope="col">Vardiya Baslangic tarihi</th>
                <th scope="col">Vardiya Baslangic tarihi</th>
                <th scope="col">Duzenle</th>
              </tr>
            </thead>
            <tbody>
              {personalList.map((personalShifts, index) => (
                <tr key={index}>
                  <td>{personalShifts.firstName}</td>
                  <td>{personalShifts.lastName}</td>
                  <td>
                    {personalShifts.startDate.toLocaleDateString("tr-TR")}
                  </td>
                  <td>{personalShifts.endDate.toLocaleDateString("tr-TR")}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      style={{ color: "white" }}
                      onClick={() => handleDeletePersonalShift(index)}
                    >
                      {" "}
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className=" btn custom-btn btn-success"
          style={{ color: "white" }}
          onClick={handleSubmit}
        >
          Planı Kaydet
        </button>
      </div>
    </>
  );
}

export default AssingmentShift;
