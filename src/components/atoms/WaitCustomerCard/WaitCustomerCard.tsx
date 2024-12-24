import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hrDispatch } from "../../../stores";
import {
  emptyCustomerList,
  fetchListUserOnWait,
  fetchUserAuthorisation,
  removeUserFromList,
} from "../../../stores/features/adminPanelSlice";

interface IWaitCustomerCard {
  userId: number;
  Name: string;
  Surname: string;
  Email: string;
  Position: string;
  CompanyName: string;
}

function WaitCustomerCard(props: IWaitCustomerCard) {
  const dispatch = useDispatch<hrDispatch>();
  const doUserAccept = () => {
    const answer = "accept"; // Değeri doğrudan burada belirtiyoruz
    dispatch(removeUserFromList(props.userId));
    dispatch(emptyCustomerList());
    dispatch(fetchUserAuthorisation({ userId: props.userId, answer }));
  };

  const doUserDenied = () => {
    const answer = "deny"; // Değeri doğrudan burada belirtiyoruz
    dispatch(removeUserFromList(props.userId));
    dispatch(emptyCustomerList());
    dispatch(fetchUserAuthorisation({ userId: props.userId, answer }));
  };
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <div className="ms-3">
              <p className="fw-bold mb-1">
                {props.Name} {props.Surname}
              </p>
              <p className="text-muted mb-0">{props.Email}</p>
            </div>
          </div>
        </td>

        <td>
          <div>
            <p>
              {props.CompanyName} / {props.Position}{" "}
            </p>
          </div>
        </td>

        <td>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-success btn-sm btn-rounded border text-white me-1"
              onClick={doUserAccept}
            >
              Accept
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-rounded text-white border"
              onClick={doUserDenied}
            >
              Denied
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default WaitCustomerCard;
