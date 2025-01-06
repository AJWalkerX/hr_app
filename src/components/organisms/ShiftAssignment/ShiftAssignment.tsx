import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/FormControl';


type Employee = {
  id: number;
  name: string;
  position: string;
  shift: string;
};

export default function ShiftAssignment() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: 'Ali Yılmaz', position: 'Muhasebeci', shift: '' },
    { id: 2, name: 'Veli Demir', position: 'Yazılım Uzmanı', shift: '' },
    { id: 3, name: 'Ayşe Kaya', position: 'Proje Yöneticisi', shift: '' },
    { id: 4, name: 'Fatma Çelik', position: 'İK Uzmanı', shift: '' },
  ]);

 
  const assignShift = (id: number, shift: string) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, shift } : employee
      )
    );
  };

  return (
    <div>
  <h2>Çalışanlara Vardiya Atama</h2>
  <table className="table table-striped table-hover text-center" style={{ width: '100%' }}>
    <thead className="table-gray">
      <tr>
        <th scope="col">Ad Soyad</th>
        <th scope="col">Pozisyon</th>
        <th scope="col">Vardiya</th>
        <th scope="col">Vardiya Atama</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.name}</td>
          <td>{employee.position}</td>
          <td>{employee.shift}</td>
          <td>
            <RadioGroup
              row
              value={employee.shift}
              onChange={(e) => assignShift(employee.id, e.target.value)}
              sx={{ justifyContent: 'space-evenly' }} // Yatayda eşit aralıklarla hizalama
            >
              <FormControlLabel value="Sabah" control={<Radio />} label="Sabah" sx={{ marginRight: 2 }} />
              <FormControlLabel value="Öğle" control={<Radio />} label="Öğle" sx={{ marginRight: 2 }} />
              <FormControlLabel value="Akşam" control={<Radio />} label="Akşam" sx={{ marginRight: 2 }} />
              <FormControlLabel value="Gece" control={<Radio />} label="Gece" />
            </RadioGroup>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
}
