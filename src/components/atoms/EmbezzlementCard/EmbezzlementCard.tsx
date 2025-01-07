import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import Swal from "sweetalert2";
import {
  fetchAssigmentEmbezzlement,
  fetchDeleteEmbezzlementByUserId,
  fetchEmbezzlementListByCompany,
} from "../../../stores/features/embezzlementSlice";

interface EmbezzlementCardProps {
  embezzlementId: number;
  description: string;
  embezzlementType: string;
  embezzlementState: string;
  title: string;
  index:number;
  userDetails: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
}

const EmbezzlementCard: React.FC<EmbezzlementCardProps> = (props) => {
  const { title, description, embezzlementType, embezzlementState, embezzlementId, userDetails, index } = props;
  const dispatch = useDispatch<hrDispatch>();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDetailClick = () => {
    setShowModal(true);
    handleClose();
  };

  const embezzlementClick = () => {
    setShowModal2(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const handleAssignmentEmbezzlement = async () => {
    const payload = {
      embezzlementId,
      firstName,
      lastName,
      email,
    };
  
    
    handleCloseModal2();
  
    try {
      const response = await dispatch(fetchAssigmentEmbezzlement(payload)).unwrap();
  
      if (response.success) {
       
        Swal.fire({
          title: "Başarılı",
          text: "Zimmet başarıyla verildi.",
          icon: "success",
          confirmButtonText: "Tamam",
        });
        dispatch(fetchEmbezzlementListByCompany());
      } else {
       
        Swal.fire({
          title: "Hata",
          text:  "Zimmetleme işlemi başarısız oldu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
    
        Swal.fire({
          title: "Hata",
          text:  "Zimmetleme işlemi sırasında bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      } else {
        Swal.fire({
          title: "Hata",
          text: "Bilinmeyen bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    }
  };
  
  
  

  const handleRemoveAssignment = async () => {
    try {
      const token = localStorage.getItem("token") || ""; 
      const payload = {
        embezzlementId,
        token, 
      };
  
      const response = await dispatch(fetchDeleteEmbezzlementByUserId(payload)).unwrap();
  
      if (response.success) {
        Swal.fire({
          title: "Başarılı",
          text: "Atama başarıyla kaldırıldı.",
          icon: "success",
          confirmButtonText: "Tamam",
        });
        dispatch(fetchEmbezzlementListByCompany());
      } else {
        Swal.fire({
          title: "Hata",
          text:  "Atama kaldırılırken bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    } catch (error: unknown) { 
      if (error instanceof Error) {  
        
        Swal.fire({
          title: "Hata",
          text:  "Atama kaldırılırken bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      } else {
        
        Swal.fire({
          title: "Hata",
          text: "Bilinmeyen bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    } finally {
      handleClose();
    }
  };
  
  
  
  

  return (
    <>
      <tr>
      <th scope="row" style={{ verticalAlign: "middle" }}>
        {index + 1} {/* Sıra numarası */}
      </th>
      <td style={{ verticalAlign: "middle" }}>{title}</td>
      <td style={{ verticalAlign: "middle" }}>{description}</td>
      <td style={{ verticalAlign: "middle" }}>{embezzlementType}</td>
      <td style={{ verticalAlign: "middle" }}>{embezzlementState}</td>
      <td style={{ verticalAlign: "middle" }}>
          <IconButton onClick={handleClick}>
            <MoreHoriz />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleDetailClick}>Detay</MenuItem>
            <MenuItem onClick={embezzlementClick}>Personele Zimmetle</MenuItem>
            <MenuItem onClick={handleRemoveAssignment}>Atamayı Kaldır</MenuItem>
          </Menu>
        </td>
      </tr>

      {/* Detay Modal */}
      <Dialog open={showModal} onClose={handleCloseModal}>
  <DialogTitle style={{ textAlign: "center", fontWeight: "bold" }}>
    Atanmış Kullanıcı Bilgisi
  </DialogTitle>
  <DialogContent style={{ textAlign: "center", padding: "20px" }}>
    {userDetails ? (
      <>
        <img
          src={userDetails.avatar}
          alt="Avatar"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "3px solid #4CAF50",
            marginBottom: "15px",
          }}
        />
        <p style={{ fontSize: "16px", margin: "5px 0" }}>
          <strong>Personel Adı:</strong> {userDetails.firstName}
        </p>
        <p style={{ fontSize: "16px", margin: "5px 0" }}>
          <strong>Personel Soyadı:</strong> {userDetails.lastName}
        </p>
      </>
    ) : (
      <p style={{ fontSize: "16px", color: "#888" }}>
        Herhangi bir personel ataması bulunmamaktadır.
      </p>
    )}
  </DialogContent>
  <DialogActions style={{ justifyContent: "center", paddingBottom: "15px" }}>
    <button
      onClick={handleCloseModal}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      Kapat
    </button>
  </DialogActions>
</Dialog>


{/* Zimmet Modal */}
<Dialog open={showModal2} onClose={handleCloseModal2}>
  <DialogTitle>Zimmeti vermek istediğiniz personelin bilgilerini giriniz.</DialogTitle>
  <DialogContent>
    <TextField
      className="form-control mt-3"
      placeholder="Personelin adı"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <TextField
      className="form-control mt-3"
      placeholder="Personelin soyadı"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    <TextField
      className="form-control mt-3"
      placeholder="Personelin mail adresi"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <p style={{ fontSize: "14px", color: "#f44336", marginTop: "10px" }}>
      Lütfen bilgileri doğru şekilde doldurun. Büyük/küçük harf uyumuna dikkat ediniz.
    </p>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseModal2} color="secondary">
      Kapat
    </Button>
    <Button onClick={handleAssignmentEmbezzlement} color="primary">
      Zimmetle
    </Button>
  </DialogActions>
</Dialog>

    </>
  );
};

export default EmbezzlementCard;
