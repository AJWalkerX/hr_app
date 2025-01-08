import React, { useEffect } from "react";
import WaitCustomerCard from "../../atoms/WaitCustomerCard/WaitCustomerCard";
import { IOnWaitCustomers } from "../../../models/IOnWaitCustomers";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchListUserOnWait } from "../../../stores/features/adminPanelSlice";

function AdminWaitCustomers() {
  const waitCustomerList: IOnWaitCustomers[] = hrUseSelector(
    (state) => state.adminpanel.onWaitCustomerList
  );
  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fetchListUserOnWait());
  }, [dispatch]);
  return (
    <>
      <div className="row mt-4">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>
            Onay Bekleyen Müşteriler
          </p>
        </div>
        <div className="col-5"></div>
        <div className="col-4 d-flex">
          <input
            className="mr-sm-2 me-2 rounded-3 border border-primary"
            type="search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0 me-3"
            type="submit"
          >
            Arama
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Personel Info</th>
              <th>Şirket/Pozisyon</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {waitCustomerList.map((item, index) => (
              <WaitCustomerCard
                key={index}
                userId={item.userId}
                Name={item.firstName}
                Surname={item.lastName}
                Email={item.email}
                CompanyName={item.companyName}
                Position={item.position}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminWaitCustomers;
