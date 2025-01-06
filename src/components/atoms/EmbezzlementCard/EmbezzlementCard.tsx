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
import { IEmbezzlementResponseDto } from "../../../models/Response/IEmbezzlementResponseDto";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import { fetchAssigmentEmbezzlement } from "../../../stores/features/embezzlementSlice";

interface EmbezzlementCardProps extends IEmbezzlementResponseDto {
  // Extend from IEmbezzlementResponseDto
}

const EmbezzlementCard: React.FC<EmbezzlementCardProps> = (props) => {
  const { description, embezzlementType, embezzlementState, embezzlementId } = props;
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
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModal2 = () => {
    setShowModal2(false);
  }

  const handleAssignmentEmbezzlement = async() => {
    const payload = {
      embezzlementId: embezzlementId,
      firstName,
      lastName,
      email 
    }
    dispatch(fetchAssigmentEmbezzlement(payload))
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
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleDetailClick}>Detay</MenuItem>
            <MenuItem onClick={embezzlementClick}>Personele Zimmetle</MenuItem>
          </Menu>
        </td>
      </tr>

      {/* Modal */}
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle>Embezzlement Details</DialogTitle>
        <DialogContent>
        <p>Herhangi bir personel ataması bulunmamaktadır.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Kapat
          </Button>
        </DialogActions>
      </Dialog>

      {/*Modal 2*/}
      <Dialog open={showModal2} onClose={handleCloseModal2}>
          <DialogTitle>Zimmeti vermek istediğiniz personelin bilgilerini giriniz.</DialogTitle>
          <DialogContent>
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-body">
              <TextField
                 className="form-control mt-3"
                 placeholder="Personelin adı"
                 value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
               />
                <TextField
                 className="form-control mt-3"
                 placeholder="Personelin soyadı"
                 value={lastName}
                 onChange={(e)=>setLastName(e.target.value)}
               />
               <TextField
                 className="form-control mt-3"
                 placeholder="Personelin mail adresi"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
               />

            </div>
            <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal2}
                >
                  Kapat
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAssignmentEmbezzlement}
                >
                  Zimmetle
                </button>
              </div>
              </div>
              </div>
          </DialogContent>
      </Dialog>
    </>
  );
};

export default EmbezzlementCard;
