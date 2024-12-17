import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForgotPasswordRequest } from "../../models/IForgotPasswordRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import Swal from "sweetalert2";
import { INewPasswordRequest } from "../../models/INewForgotPasswordRequest";
import { IUserIdRequest } from "../../models/IUSerIdRequest";

interface IForgotPasswordState {
  isForgotPasswordLoading: boolean;
  isResetPasswordLoading: boolean;
  userId: number | null;
}

const initialState: IForgotPasswordState = {
  isForgotPasswordLoading: false,
  isResetPasswordLoading: false,
  userId: null,
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
  reducers: {
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
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
        } else {
          Swal.fire({
            icon: "error",
            title: "Hata!",
            text: action.payload.message,
          });
        }
      }
    );
  },
});
export const { setUserId } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
