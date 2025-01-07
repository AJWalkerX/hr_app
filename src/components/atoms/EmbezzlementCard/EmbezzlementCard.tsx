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
import { fetchAssigmentEmbezzlement, fetchEmbezzlementListByCompany } from "../../../stores/features/embezzlementSlice";

interface EmbezzlementCardProps {
  embezzlementId: number;
  description: string;
  embezzlementType: string;
  embezzlementState: string;
  userDetails: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
}

const EmbezzlementCard: React.FC<EmbezzlementCardProps> = (props) => {
  const { description, embezzlementType, embezzlementState, embezzlementId, userDetails } = props;
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
    dispatch(fetchAssigmentEmbezzlement(payload));
    handleCloseModal2();
  };

  return (
    <>
      <tr>
        <th scope="row" style={{ verticalAlign: "middle" }}>
          {description}
        </th>
        <td style={{ verticalAlign: "middle" }}>{embezzlementType}</td>
        <td style={{ verticalAlign: "middle" }}>{embezzlementState}</td>
        <td style={{ verticalAlign: "middle" }}>
          <IconButton onClick={handleClick}>
            <MoreHoriz />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleDetailClick}>Detay</MenuItem>
            <MenuItem onClick={embezzlementClick}>Personele Zimmetle</MenuItem>
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