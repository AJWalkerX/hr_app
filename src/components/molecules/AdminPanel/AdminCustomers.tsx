import React, { useEffect } from "react";
import CustomerCard from "../../atoms/CustomerCard/CustomerCard";
import { ICustomers } from "../../../models/ICustomers";
import { hrDispatch, hrUseSelector } from "../../../stores";
import { useDispatch } from "react-redux";
import { fetchCustomerList } from "../../../stores/features/adminPanelSlice";

function AdminCustomers() {
  const customerCardList: ICustomers[] = hrUseSelector(
    (state) => state.adminpanel.customerList
  );
  const dispatch = useDispatch<hrDispatch>();
  useEffect(() => {
    dispatch(fetchCustomerList());
  }, [dispatch]);

  return (
    <>
      <div className="row mt-4">
        <div className="col-3">
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>Müşteriler</p>
        </div>
        <div className="col-5"></div>
        <div className="col-4 d-flex">
          <input
            className="mr-sm-2 me-2 rounded-3 border border-primary"
            type="search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
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
              <th>Şirket Bilgisi</th>
              <th>Ödenen Hizmet Bedeli</th>
              <th>Plan</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {customerCardList.map((customer, index) => {
              return (
                <CustomerCard
                  key={index}
                  companyLogo={customer.companyLogo}
                  companyName={customer.companyName}
                  companyMail={customer.companyMail}
                  totalPaymentAmount={customer.totalPaymentAmount}
                  memberShipState={customer.memberShipState}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminCustomers;
