import React from "react";
import ManagerSidebar from "../components/molecules/ManagerPanel/ManagerSidebar";
import ShiftAssignment from "../components/organisms/ShiftAssignment/ShiftAssignment";
import ShiftAssignmentUpdate from "../components/organisms/ShiftAssignmentUpdate/ShiftAssignmentUpdate";
import { Assignment } from "@mui/icons-material";
import AssingmentShift from "../components/molecules/AssingmentShift/AssingmentShift";

function ShiftAssignmentPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <ManagerSidebar />
        </div>
        <div
          className="col-11 "
          style={{ marginTop: "70px", marginLeft: "200px" }}
        >
          <div className="row mb-5">
            <AssingmentShift />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShiftAssignmentPage;
