import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Box,
  TextField,
} from "@mui/material";

interface Shift {
  startDate: string;
  endDate: string;
  shift: string;
}

interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  avatarUrl: string;
  shifts: Shift[];
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Ali Yılmaz",
    email: "ali.yilmaz@example.com",
    position: "Muhasebeci",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    shifts: [
      { startDate: "2025-01-01", endDate: "2025-01-07", shift: "Sabah" },
      { startDate: "2025-01-08", endDate: "2025-01-14", shift: "Öğle" },
      { startDate: "2025-01-15", endDate: "2025-01-21", shift: "Gece" },
      { startDate: "2025-01-22", endDate: "2025-01-28", shift: "Akşam" },
      { startDate: "2025-01-29", endDate: "2025-02-04", shift: "Sabah" },
      { startDate: "2025-02-05", endDate: "2025-02-11", shift: "Öğle" },
      { startDate: "2025-02-12", endDate: "2025-02-18", shift: "Gece" },
      { startDate: "2025-02-19", endDate: "2025-02-25", shift: "Akşam" },
      { startDate: "2025-02-26", endDate: "2025-03-03", shift: "Sabah" },
      { startDate: "2025-03-04", endDate: "2025-03-10", shift: "Öğle" },
      { startDate: "2025-03-11", endDate: "2025-03-17", shift: "Gece" },
      { startDate: "2025-03-18", endDate: "2025-03-24", shift: "Akşam" },
      { startDate: "2025-03-25", endDate: "2025-03-31", shift: "Sabah" },
    ],
  },
  {
    id: 2,
    name: "Veli Demir",
    email: "veli.demir@example.com",
    position: "Yazılım Uzmanı",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    shifts: [
      { startDate: "2025-01-01", endDate: "2025-01-07", shift: "Gece" },
      { startDate: "2025-01-08", endDate: "2025-01-14", shift: "Akşam" },
      { startDate: "2025-01-15", endDate: "2025-01-21", shift: "Sabah" },
      { startDate: "2025-01-22", endDate: "2025-01-28", shift: "Öğle" },
      { startDate: "2025-01-29", endDate: "2025-02-04", shift: "Gece" },
      { startDate: "2025-02-05", endDate: "2025-02-11", shift: "Akşam" },
      { startDate: "2025-02-12", endDate: "2025-02-18", shift: "Sabah" },
      { startDate: "2025-02-19", endDate: "2025-02-25", shift: "Öğle" },
      { startDate: "2025-02-26", endDate: "2025-03-03", shift: "Gece" },
      { startDate: "2025-03-04", endDate: "2025-03-10", shift: "Akşam" },
      { startDate: "2025-03-11", endDate: "2025-03-17", shift: "Sabah" },
      { startDate: "2025-03-18", endDate: "2025-03-24", shift: "Öğle" },
      { startDate: "2025-03-25", endDate: "2025-03-31", shift: "Gece" },
    ],
  },
  {
    id: 3,
    name: "Zeynep Akın",
    email: "zeynep.akin@example.com",
    position: "Proje Yöneticisi",
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    shifts: [
      { startDate: "2025-01-01", endDate: "2025-01-07", shift: "Akşam" },
      { startDate: "2025-01-08", endDate: "2025-01-14", shift: "Sabah" },
      { startDate: "2025-01-15", endDate: "2025-01-21", shift: "Öğle" },
      { startDate: "2025-01-22", endDate: "2025-01-28", shift: "Gece" },
      { startDate: "2025-01-29", endDate: "2025-02-04", shift: "Akşam" },
      { startDate: "2025-02-05", endDate: "2025-02-11", shift: "Sabah" },
      { startDate: "2025-02-12", endDate: "2025-02-18", shift: "Öğle" },
      { startDate: "2025-02-19", endDate: "2025-02-25", shift: "Gece" },
      { startDate: "2025-02-26", endDate: "2025-03-03", shift: "Akşam" },
      { startDate: "2025-03-04", endDate: "2025-03-10", shift: "Sabah" },
      { startDate: "2025-03-11", endDate: "2025-03-17", shift: "Öğle" },
      { startDate: "2025-03-18", endDate: "2025-03-24", shift: "Gece" },
      { startDate: "2025-03-25", endDate: "2025-03-31", shift: "Akşam" },
    ],
  },
];

function ShiftAssignmentUpdate() {
  const [shiftData, setShiftData] = useState<Employee[]>(employees);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [searchName, setSearchName] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);
  const [currentShift, setCurrentShift] = useState<Shift | null>(null);
  const [newShift, setNewShift] = useState<string>("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [shiftToDelete, setShiftToDelete] = useState<{
    employeeId: number;
    index: number;
  } | null>(null);

  const filterShiftsByDate = (shift: Shift) => {
    const startDate = new Date(shift.startDate);
    const endDate = new Date(shift.endDate);
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;

    return (
      (startYear === selectedYear && startMonth === selectedMonth) ||
      (endYear === selectedYear && endMonth === selectedMonth)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleShiftDelete = () => {
    if (shiftToDelete) {
      const { employeeId, index } = shiftToDelete;
      const updatedEmployees = shiftData.map((employee) => {
        if (employee.id === employeeId) {
          const updatedShifts = employee.shifts.filter(
            (_, idx) => idx !== index
          ); // Silme işlemi
          return { ...employee, shifts: updatedShifts };
        }
        return employee;
      });

      setShiftData(updatedEmployees);
      setDeleteModalOpen(false);
      setShiftToDelete(null);
    }
  };

  const openDeleteModal = (employeeId: number, index: number) => {
    setShiftToDelete({ employeeId, index });
    setDeleteModalOpen(true);
  };

  const openShiftModal = (shift: Shift, employeeId: number, index: number) => {
    setCurrentShift(shift);
    setNewShift(shift.shift);
    setOpenModal(true);
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const filteredEmployees = shiftData.filter((employee) =>
    employee.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          marginRight: "80px",
        }}
      >
        Vardiya Güncelleme
      </h2>

      <TextField
        label="Çalışan Adı"
        variant="outlined"
        value={searchName}
        onChange={handleSearchChange}
        fullWidth
        margin="normal"
      />

      <div style={{ display: "flex", gap: "20px", marginTop:"10px" }}>
        <FormControl fullWidth>
          <InputLabel>Yıl</InputLabel>
          <Select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            label="Yıl"
          >
            <MenuItem value={2025}>2025</MenuItem>
            <MenuItem value={2026}>2026</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Ay</InputLabel>
          <Select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            label="Ay"
          >
            <MenuItem value={1}>Ocak</MenuItem>
            <MenuItem value={2}>Şubat</MenuItem>
            <MenuItem value={3}>Mart</MenuItem>
            <MenuItem value={4}>Nisan</MenuItem>
            <MenuItem value={5}>Mayıs</MenuItem>
            <MenuItem value={6}>Haziran</MenuItem>
            <MenuItem value={7}>Temmuz</MenuItem>
            <MenuItem value={8}>Ağustos</MenuItem>
            <MenuItem value={9}>Eylül</MenuItem>
            <MenuItem value={10}>Ekim</MenuItem>
            <MenuItem value={11}>Kasım</MenuItem>
            <MenuItem value={12}>Aralık</MenuItem>
          </Select>
        </FormControl>
      </div>

      {filteredEmployees.map((employee) => (
  <div
  className="shadow"
  key={employee.id}
  style={{
    marginTop: "20px",
    padding: "30px",
    display: "flex", // İki sütunu yan yana hizalar
    justifyContent: "space-between", // Alanları sağa ve sola iter
    gap: "20px", // İki alan arasına boşluk ekler
    position: "relative", // Butonu konumlandırmak için gerekli
  }}
>
  {/* Sol tarafta kullanıcı bilgileri */}
  <div style={{ flex: 1, position: "relative" }}>
    <div
      style={{
        display: "flex",
        alignItems: "center", // Resim ve isim dikeyde ortalanır
        marginBottom: "15px", // Altına boşluk bırakır
      }}
    >
      <img
        src={employee.avatarUrl}
        alt={`${employee.name}'s avatar`}
        width="50"
        height="50"
        style={{
          borderRadius: "50%", // Resmi dairesel yapar
          border: "2px solid #007bff", // Resmi çerçeve içine alır
          padding: "2px",
        }}
      />
      <span className="h2 ms-3" style={{ color: "#007bff" }}>
        {employee.name}
      </span>
    </div>
    {/* Email bilgisi */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px", // Altına boşluk bırakır
      }}
    >
      <i
        className="fas fa-envelope"
        style={{
          color: "#6c757d",
          fontSize: "20px",
          marginRight: "10px",
        }}
      ></i>
      <p style={{ margin: 0, fontSize: "16px", color: "#495057" }}>
        {employee.email}
      </p>
    </div>
    {/* Pozisyon bilgisi */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <i
        className="fas fa-briefcase"
        style={{
          color: "#6c757d",
          fontSize: "20px",
          marginRight: "10px",
        }}
      ></i>
      <p style={{ margin: 0, fontSize: "16px", color: "#495057" }}>
        {employee.position}
      </p>
    </div>

    {/* Ekleme Butonu */}
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
      }}
    >
      <Button
        variant="contained"
        color="success"
        
        style={{
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>
        Vardiya Ekle
      </Button>
    </div>
  </div>

  {/* Sağ tarafta vardiya bilgileri */}
  <div style={{ flex: 1 }}>
    <h3 style={{ color: "#007bff", marginBottom: "15px" }}>Vardiyalar:</h3>
    <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
      {employee.shifts.filter(filterShiftsByDate).map((shift, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f8f9fa", // Hafif gri arka plan
            padding: "10px 15px",
            borderRadius: "8px", // Köşeleri yuvarlar
            marginBottom: "10px", // Öğeler arası boşluk
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Hafif gölge
          }}
        >
          {/* Vardiya Bilgisi */}
          <div>
            <i
              className="fas fa-calendar-alt"
              style={{
                color: "#6c757d",
                marginRight: "10px",
              }}
            ></i>
            <span style={{ fontSize: "16px", fontWeight: "bold", color: "#343a40" }}>
              {formatDate(shift.startDate)} - {formatDate(shift.endDate)}
            </span>
            <span style={{ marginLeft: "10px", color: "#495057" }}>
              {shift.shift}
            </span>
          </div>

          {/* Düzenle ve Sil Butonları */}
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => openShiftModal(shift, employee.id, index)}
              style={{ marginRight: "10px", fontSize: "14px" }}
            >
              <i className="fas fa-edit" style={{ marginRight: "5px" }}></i>
              Düzenle
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => openDeleteModal(employee.id, index)}
              style={{ fontSize: "14px" }}
            >
              <i className="fas fa-trash" style={{ marginRight: "5px" }}></i>
              Sil
            </Button>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

))}


      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <h2>Vardiya Güncelleme</h2>
          <TextField
            label="Yeni Vardiya"
            variant="outlined"
            value={newShift}
            onChange={(e) => setNewShift(e.target.value)}
            fullWidth
            margin="normal"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                if (currentShift) {
                  // Vardiya güncelleme
                }
              }}
            >
              Güncelle
            </Button>
           
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              İptal
            </Button>
          </div>
        </Box>
      </Modal>

      {/* Vardiya Silme Modal */}
      <Modal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <h2>Vardiya Sil</h2>
          <p>Bu vardiyayı silmek istediğinizden emin misiniz?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleShiftDelete}
            >
              Evet, Sil
            </Button>
            <Button
              variant="outlined"
              onClick={() => setDeleteModalOpen(false)}
            >
              İptal
            </Button>
          </div>
        </Box>
      </Modal>
        

        

     
    </div>
  );
}

export default ShiftAssignmentUpdate;
