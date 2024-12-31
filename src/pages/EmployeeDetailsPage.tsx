import React from "react";
import { useLocation } from "react-router-dom";
import EmployeeDetailCard from "../components/atoms/EmployeeCard/EmployeeDetailCard";

function EmployeeDetailsPage() {
  const { state } = useLocation(); // Access the passed state
  const employee = state?.employee; // Extract the employee object

  if (!employee) {
    return <div>No employee data available</div>;
  }

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(10, 57, 129)", height: "100vh" }}
    >
      <EmployeeDetailCard {...employee} />
    </div>
  );
}

export default EmployeeDetailsPage;
