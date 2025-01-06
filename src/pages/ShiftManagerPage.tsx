import React from "react";
import ShiftRequestOrganism from "../components/organisms/ShiftRequest/ShiftRequestOrganism";
import ManagerSidebar from "../components/molecules/ManagerPanel/ManagerSidebar";
import CompanyShiftList from "../components/organisms/CompanyShiftList/CompanyShiftList";

function ShiftManagerPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <ManagerSidebar />
        </div>
        <div
          className="col-11 "
          style={{ marginTop: "70px", marginLeft: "250px" }}
        >
          <div className="row">
            <ShiftRequestOrganism />
          </div>
          <div className="row mt-3 mb-5">
            <CompanyShiftList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShiftManagerPage;
