import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { ICreateShiftRequest } from "../../models/Request/ICreateShiftRequest";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import Swal from "sweetalert2";
import { IShiftListResponse } from "../../models/Response/IShiftListResponse";
import { DateTime } from "luxon";

interface IShiftState {
  createShift: ICreateShiftRequest[];
  isCreateShiftLoading: boolean;
  shiftList: IShiftListResponse[];
  isShiftListLoading: boolean;
}

const initialShiftState: IShiftState = {
  createShift: [],
  isCreateShiftLoading: false,

  shiftList: [],
  isShiftListLoading: false,
};

export const fetchCreateShift = createAsyncThunk(
  "shift/fetchCreateShift",
  async (payload: ICreateShiftRequest[]) => {
    const token = localStorage.getItem("token");
    const requestBody = payload.map((item) => ({
      ...item,
      token: token,
      shiftStart: item.shiftStart.toFormat("HH:mm"),
      shiftEnd: item.shiftEnd.toFormat("HH:mm"),
    }));
    const response = await fetch(apis.shiftService + "/create-shift", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchShiftList = createAsyncThunk(
  "shift/fetchShiftList",
  async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      apis.shiftService + "/list-shift?token=" + token
    );
    const data = await response.json();
    return data;
  }
);

const shiftSlice = createSlice({
  name: "shift",
  initialState: initialShiftState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateShift.pending, (state) => {
      state.isCreateShiftLoading = true;
    });
    builder.addCase(
      fetchCreateShift.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isCreateShiftLoading = false;
        if (action.payload.code === 200) {
          state.createShift = action.payload.data;
          Swal.fire({
            icon: "success",
            title: action.payload.message,
            timer: 3000,
          });
        } else
          Swal.fire({
            icon: "error",
            title: "Hata!",
            text: action.payload.message,
          });
      }
    );

    builder.addCase(fetchShiftList.pending, (state) => {
      state.isShiftListLoading = true;
    });
    builder.addCase(fetchShiftList.fulfilled, (state, action) => {
      state.isShiftListLoading = false;
      if (action.payload.code === 200) {
        state.shiftList = action.payload.data;
      }
    });
  },
});

export default shiftSlice.reducer;
