import { createAsyncThunk } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { ICreateShiftRequest } from "../../models/Request/ICreateShiftRequest";

export const fetchCreateShift = createAsyncThunk(
  "shift/fetchCreateShift",
  async (payload: ICreateShiftRequest) => {
    const response = await fetch(apis.shiftService + "/create-shift", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);
