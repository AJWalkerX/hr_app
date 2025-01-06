import React, { useEffect, useState } from "react";


function CompanyShiftList() {
 
  const [shifts, setShifts] = useState<{ id: number; name: string; startTime: string; endTime: string }[]>([]);
 
  const fetchShifts = async () => {
   
    const exampleShifts = [
      { id: 1, name: "Sabah Vardiyası", startTime: "09:00", endTime: "17:00" },
      { id: 2, name: "Öğle Vardiyası", startTime: "12:00", endTime: "20:00" },
      { id: 3, name: "Gece Vardiyası", startTime: "22:00", endTime: "06:00" },
      { id: 4, name: "Haftasonu Vardiyası", startTime: "10:00", endTime: "18:00" },
      { id: 5, name: "Akşam Vardiyası", startTime: "17:00", endTime: "01:00" }
    ];

    setShifts(exampleShifts);

  };

  useEffect(() => {
    fetchShifts();
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
            {shifts.map((shift) => (
              <tr key={shift.id}>
                <td>{shift.name}</td>
                <td>{shift.startTime}</td>
                <td>{shift.endTime}</td>
                <td>
                  <button
                    onClick={() => shift.id}
                    className="btn btn-danger ms-3"
                    style={{ color: "white" }}
                  >
                    Sil
                  </button>


                  <button
                    onClick={() => shift.id}
                    className="btn btn-secondary ms-3"
                    style={{ color: "white" }}
                  >
                    Düzenle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyShiftList;
