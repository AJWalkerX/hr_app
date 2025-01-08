import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apis from "../../config/RestApis";
import { ICreateShiftRequest } from "../../models/Request/ICreateShiftRequest";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import Swal from "sweetalert2";
import { IShiftListResponse } from "../../models/Response/IShiftListResponse";
import { DateTime } from "luxon";
import { IAssignShiftRequest } from "../../models/Request/IAssignShiftRequest";
import { IMyShiftResponse } from "../../models/Response/IMyShiftResponse";

interface IShiftState {
  createShift: ICreateShiftRequest[];
  isCreateShiftLoading: boolean;
  shiftList: IShiftListResponse[];
  isShiftListLoading: boolean;
  isShiftDeleteLoading: boolean;
  isAssignmentShiftLoading: boolean;
  myShift: IMyShiftResponse[];
  isMyShiftLoading:boolean;
}

const initialShiftState: IShiftState = {
  createShift: [],
  isCreateShiftLoading: false,

  shiftList: [],
  isShiftListLoading: false,

  isShiftDeleteLoading: false,
  isAssignmentShiftLoading: false,

  myShift:[],
  isMyShiftLoading:false
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

export const fetchAssignmentShift = createAsyncThunk(
  "shift/fetchAssignmentShift",
  async (payload: IAssignShiftRequest[]) => {
    const token = localStorage.getItem("token");
    const requestBody = payload.map((item) => ({
      ...item,
      token: token,
    }));
    const response = await fetch(apis.shiftService + "/assign-shift", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchGetAllMyShifts= createAsyncThunk(
  "shift/fetchGetAllMyShifts",
  async () =>{
    const token = localStorage.getItem("token");
    const response = await fetch(
      apis.shiftService + "/list-my-shift?token=" +token
    );
    const data = await response.json();
    return data;
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

export const fetchDeleteShift = createAsyncThunk(
  "shift/fetchDeleteShift",
  async (shiftId: number) => {
    const token = localStorage.getItem("token");
    const requestBody = {
      shiftId: shiftId,
      token: token,
    };
    const response = await fetch(apis.shiftService + "/delete-shift", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);

const shiftSlice = createSlice({
  name: "shift",
  initialState: initialShiftState,
  reducers: {
    deleteShift: (state, action: PayloadAction<number>) => {
      state.isShiftDeleteLoading = true;
      state.shiftList = state.shiftList.filter(
        (item) => item.shiftId !== action.payload
      );
      state.isShiftDeleteLoading = false;
    },
  },
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

    builder.addCase(fetchGetAllMyShifts.pending,(state)=>{
      state.isMyShiftLoading = true;
    });
    builder.addCase(fetchGetAllMyShifts.fulfilled,(state,action)=>{
      state.isMyShiftLoading = false;
      if(action.payload.code === 200){
        state.myShift = action.payload.data;
      }
    });

    builder.addCase(fetchDeleteShift.pending, (state) => {
      state.isShiftDeleteLoading = true;
    });
    builder.addCase(fetchDeleteShift.fulfilled, (state, action) => {
      state.isShiftDeleteLoading = false;
      if (action.payload.code === 200) {
        state.shiftList = state.shiftList.filter(
          (item) => item.shiftId !== action.payload.data
        );
        Swal.fire({
          icon: "success",
          title: action.payload.message,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Hata!",
          text: action.payload.message,
        });
      }
    });

    builder.addCase(fetchAssignmentShift.pending, (state) => {
      state.isAssignmentShiftLoading = true;
    });
    builder.addCase(fetchAssignmentShift.fulfilled, (state, action) => {
      state.isAssignmentShiftLoading = false;
      if (action.payload.code === 200) {
        Swal.fire({
          icon: "success",
          title: action.payload.message,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Hata!",
          text: action.payload.message,
        });
      }
    });
  },
});

export const { deleteShift } = shiftSlice.actions;
export default shiftSlice.reducer;
