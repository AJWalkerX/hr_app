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
    await dispatch(fetchAssigmentEmbezzlement(payload));
    dispatch(fetchEmbezzlementListByCompany());
    handleCloseModal2();
  };

  const handleRemoveAssignment = async () => {
    try {
      const token = localStorage.getItem("token") || ""; // null durumunda boş string
      const payload = {
        embezzlementId,
        token, // Artık sadece string
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
          text: response.message || "Atama kaldırılırken bir hata oluştu.",
          icon: "error",
          confirmButtonText: "Tamam",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Hata",
        text: "Atama kaldırılırken bir hata oluştu.",
        icon: "error",
        confirmButtonText: "Tamam",
      });
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
        <DialogTitle>Atanmış Kullanıcı Bilgisi</DialogTitle>
        <DialogContent>
          {userDetails ? (
            <>
              <img
                src={userDetails.avatar}
                alt="Avatar"
                style={{ width: 80, height: 80, borderRadius: "50%" }}
              />
              <p>
                <strong>Personel Adı:</strong> {userDetails.firstName}
              </p>
              <p>
                <strong>Personel Soyadı:</strong> {userDetails.lastName}
              </p>
            </>
          ) : (
            <p>Herhangi bir personel ataması bulunmamaktadır.</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Kapat
          </Button>
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
