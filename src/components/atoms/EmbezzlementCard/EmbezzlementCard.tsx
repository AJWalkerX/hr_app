import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import { IEmbezzlementResponseDto } from "../../../models/Response/IEmbezzlementResponseDto";

interface EmbezzlementCardProps extends IEmbezzlementResponseDto {
  // Extend from IEmbezzlementResponseDto
}

const EmbezzlementCard: React.FC<EmbezzlementCardProps> = (props) => {
  const { description, embezzlementType, embezzlementState, employee } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
     <tr>
  <th scope="row" style={{ verticalAlign: "middle" }}>
    {description}
  </th>
  <td style={{ verticalAlign: "middle" }}>
    {embezzlementType}
  </td>
  <td style={{ verticalAlign: "middle" }}>
    {embezzlementState}
  </td>
  <td style={{ verticalAlign: "middle" }}>
    <IconButton onClick={handleClick}>
      <MoreHoriz />
    </IconButton>
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem onClick={handleDetailClick}>Detay</MenuItem>
    </Menu>
  </td>
</tr>

{/* Modal */}
<Dialog open={showModal} onClose={handleCloseModal}>
  <DialogTitle>Embezzlement Details</DialogTitle>
  <DialogContent>
    {employee ? (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={employee.avatar}
          alt="avatar"
          width={50}
          height={50}
          style={{ borderRadius: "50%", marginRight: "10px" }}
        />
        <div>
          <p>
            {employee.firstName} {employee.lastName}
          </p>
        </div>
      </div>
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
    </>
  );
};

export default EmbezzlementCard;
