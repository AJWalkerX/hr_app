import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForgotPasswordRequest } from "../../models/IForgotPasswordRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import Swal from "sweetalert2";
import { INewPasswordRequest } from "../../models/INewForgotPasswordRequest";

interface IForgotPasswordState {
  isForgotPasswordLoading: boolean;
  isResetPasswordLoading: boolean;
  isSuccess: boolean;
}

const initialState: IForgotPasswordState = {
  isForgotPasswordLoading: false,
  isResetPasswordLoading: false,
  isSuccess: false,
};

export const fetchForgotPassword = createAsyncThunk(
  "forgotPassword/fetchForgotPassword",
  async (payload: IForgotPasswordRequest) => {
    const response = await fetch(apis.userService + "/auth-forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchNewPassword = createAsyncThunk(
  "forgotPassword/fetchNewPassword",
  async (payload: INewPasswordRequest) => {
    const response = await fetch(apis.userService + "/new-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchForgotPassword.pending, (state) => {
      state.isForgotPasswordLoading = true;
    });
    build.addCase(
      fetchForgotPassword.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isForgotPasswordLoading = false;
        if (action.payload.code === 200) {
          Swal.fire({
            icon: "success",
            title: action.payload.message,
            timer: 3000,
          });
        }
      }
    );
    build.addCase(fetchNewPassword.pending, (state) => {
      state.isResetPasswordLoading = true;
    });
    build.addCase(
      fetchNewPassword.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isResetPasswordLoading = false;
        if (action.payload.code === 200) {
          state.isSuccess = true;
        } else {
          Swal.fire({
            icon: "error",
            title: "Hata!",
            text: action.payload.message,
          });
          state.isSuccess = false;
        }
      }
    );
  },
});
export default forgotPasswordSlice.reducer;
