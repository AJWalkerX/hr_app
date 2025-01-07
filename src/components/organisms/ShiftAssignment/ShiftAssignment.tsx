import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Modal, Box } from '@mui/material';

type Employee = {
  id: number;
  name: string;
  email: string;
  position: string;
  avatarUrl: string;
  shifts: { startDate: string; endDate: string; shift: string }[];
};


const years = [2023, 2024, 2025];

const generateMonths = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    const monthName = new Date(0, i).toLocaleString('default', { month: 'long' });
    months.push({ value: i + 1, label: monthName });
  }
  return months;
};

const isShiftInMonth = (startDate: string, endDate: string, month: number, year: number) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const startYear = start.getFullYear();
  const startMonth = start.getMonth() + 1; 
  const endYear = end.getFullYear();
  const endMonth = end.getMonth() + 1;

  
  return (
    (startYear === year && startMonth === month) || 
    (endYear === year && endMonth === month) || 
    (start <= new Date(year, month, 0) && end >= new Date(year, month - 1, 1))
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ShiftAssignment() {
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2025);
  const years = [2023, 2024, 2025];
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const employees = [
    {
      id: 1,
      name: 'Ali Yılmaz',
      email: 'ali.yilmaz@example.com',
      position: 'Muhasebeci',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      shifts: [
        { startDate: '2025-01-01', endDate: '2025-01-07', shift: 'Sabah' },
        { startDate: '2025-01-08', endDate: '2025-01-14', shift: 'Öğle' },
        { startDate: '2025-01-15', endDate: '2025-01-21', shift: 'Gece' },
        { startDate: '2025-01-22', endDate: '2025-01-28', shift: 'Akşam' },
        { startDate: '2025-01-29', endDate: '2025-02-04', shift: 'Sabah' },
        { startDate: '2025-02-05', endDate: '2025-02-11', shift: 'Öğle' },
        { startDate: '2025-02-12', endDate: '2025-02-18', shift: 'Gece' },
        { startDate: '2025-02-19', endDate: '2025-02-25', shift: 'Akşam' },
        { startDate: '2025-02-26', endDate: '2025-03-03', shift: 'Sabah' },
        { startDate: '2025-03-04', endDate: '2025-03-10', shift: 'Öğle' },
        { startDate: '2025-03-11', endDate: '2025-03-17', shift: 'Gece' },
        { startDate: '2025-03-18', endDate: '2025-03-24', shift: 'Akşam' },
        { startDate: '2025-03-25', endDate: '2025-03-31', shift: 'Sabah' },
      ],
    },
    {
      id: 2,
      name: 'Veli Demir',
      email: 'veli.demir@example.com',
      position: 'Yazılım Uzmanı',
      avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      shifts: [
        { startDate: '2025-01-01', endDate: '2025-01-07', shift: 'Gece' },
        { startDate: '2025-01-08', endDate: '2025-01-14', shift: 'Akşam' },
        { startDate: '2025-01-15', endDate: '2025-01-21', shift: 'Sabah' },
        { startDate: '2025-01-22', endDate: '2025-01-28', shift: 'Öğle' },
        { startDate: '2025-01-29', endDate: '2025-02-04', shift: 'Gece' },
        { startDate: '2025-02-05', endDate: '2025-02-11', shift: 'Akşam' },
        { startDate: '2025-02-12', endDate: '2025-02-18', shift: 'Sabah' },
        { startDate: '2025-02-19', endDate: '2025-02-25', shift: 'Öğle' },
        { startDate: '2025-02-26', endDate: '2025-03-03', shift: 'Gece' },
        { startDate: '2025-03-04', endDate: '2025-03-10', shift: 'Akşam' },
        { startDate: '2025-03-11', endDate: '2025-03-17', shift: 'Sabah' },
        { startDate: '2025-03-18', endDate: '2025-03-24', shift: 'Öğle' },
        { startDate: '2025-03-25', endDate: '2025-03-31', shift: 'Gece' },
      ],
    },
    {
      id: 3,
      name: 'Zeynep Akın',
      email: 'zeynep.akin@example.com',
      position: 'Proje Yöneticisi',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      shifts: [
        { startDate: '2025-01-01', endDate: '2025-01-07', shift: 'Akşam' },
        { startDate: '2025-01-08', endDate: '2025-01-14', shift: 'Sabah' },
        { startDate: '2025-01-15', endDate: '2025-01-21', shift: 'Öğle' },
        { startDate: '2025-01-22', endDate: '2025-01-28', shift: 'Gece' },
        { startDate: '2025-01-29', endDate: '2025-02-04', shift: 'Akşam' },
        { startDate: '2025-02-05', endDate: '2025-02-11', shift: 'Sabah' },
        { startDate: '2025-02-12', endDate: '2025-02-18', shift: 'Öğle' },
        { startDate: '2025-02-19', endDate: '2025-02-25', shift: 'Gece' },
        { startDate: '2025-02-26', endDate: '2025-03-03', shift: 'Akşam' },
        { startDate: '2025-03-04', endDate: '2025-03-10', shift: 'Sabah' },
        { startDate: '2025-03-11', endDate: '2025-03-17', shift: 'Öğle' },
        { startDate: '2025-03-18', endDate: '2025-03-24', shift: 'Gece' },
        { startDate: '2025-03-25', endDate: '2025-03-31', shift: 'Akşam' },
      ],
    },
  ];
  

  const months = generateMonths();

  const openModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '30px',marginRight:'80px'}}>Vardiya Atama</h2>
      <table className="table table-striped table-hover text-center" style={{ width: '100%' }}>
        <thead className="table-gray">
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">Ad Soyad</th>
            <th scope="col">E-posta</th>
            <th scope="col">Pozisyon</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <img
                  src={employee.avatarUrl}
                  alt={employee.name}
                  style={{ width: '35px', height: '35px', borderRadius: '50%' }}
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.position}</td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => openModal(employee)}
                  size="small"
                >
                  İncele
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal open={isModalOpen} onClose={closeModal}>
  <Box sx={modalStyle}>
    <h3>{selectedEmployee?.name}</h3>
    
    
    <FormControl style={{ marginBottom: '20px', width: '100%' }} size="small">
      <InputLabel>Ay Seç</InputLabel>
      <Select
        value={month}
        onChange={(e) => setMonth(e.target.value as number)}
        label="Ay Seç"
      >
        {months.map((m) => (
          <MenuItem key={m.value} value={m.value}>
            {m.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    
    <FormControl style={{ marginBottom: '20px', width: '100%' }} size="small">
      <InputLabel>Yıl Seç</InputLabel>
      <Select
        value={year}
        onChange={(e) => setYear(e.target.value as number)}
        label="Yıl Seç"
      >
        {years.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </Select>
    </FormControl>

    
    <div>
      {selectedEmployee?.shifts.filter((shift) => isShiftInMonth(shift.startDate, shift.endDate, month, year)).length === 0 ? (
        <p>Vardiya Yok</p>
      ) : (
        selectedEmployee?.shifts
          .filter((shift) => isShiftInMonth(shift.startDate, shift.endDate, month, year))
          .map((shift, index) => (
            <p key={index}>
              {shift.startDate} - {shift.endDate}: {shift.shift}
            </p>
          ))
      )}
    </div>

    <Button variant="contained" color="secondary" onClick={closeModal}>
      Kapat
    </Button>
  </Box>
</Modal>


    </div>
  );
}
