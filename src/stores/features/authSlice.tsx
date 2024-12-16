import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { ILoginRequest } from "../../models/ILoginRequest";
import apis from "../../config/RestApis";
import { IRegisterRequest } from "../../models/IRegisterRequest";
import Swal from "sweetalert2";
import { IBaseResponse } from "../../models/IBaseResponse";
import { IForgotPasswordRequest } from "../../models/IForgotPasswordRequest";
import { INewPasswordRequest } from "../../models/INewForgotPasswordRequest";

const initialAuthState = {
  isAuth: false,
  isAdminAuth: false,
  isAdminLoginLoading: false,
  isLoginLoading: false,
  isRegisterLoading: false,

  user: {},
};

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (payload: IRegisterRequest) => {
    const response = await fetch(apis.authService + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);
export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (payload: ILoginRequest) => {
    const response = await fetch(apis.authService + "/dologin", {
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
  "auth/fetchNewPassword",
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

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchRegister.pending, (state) => {
      state.isRegisterLoading = true;
    });
    build.addCase(
      fetchRegister.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isRegisterLoading = false;
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
      }
    );

    build.addCase(fetchLogin.pending, (state) => {
      state.isLoginLoading = true;
    });
    build.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isLoginLoading = false;
        if (action.payload.code === 200) {
          state.isAuth = true;
          localStorage.setItem("token", action.payload.data);
        } else if (action.payload.code === 6100) {
          Swal.fire({
            icon: "error",
            title: "Hata!",
            text: action.payload.message,
          });
        } else if (
          action.payload.code === 6120 ||
          action.payload.code === 6130
        ) {
          Swal.fire({
            icon: "warning",
            title: "Bilgilendirme",
            text: action.payload.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Hata!",
            text: action.payload.message,
          });
        }
      }
    );

    build.addCase(fetchNewPassword.pending, (state) => {
      state.isRegisterLoading = true;
    });
    build.addCase(
      fetchNewPassword.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isRegisterLoading = false;
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

export default authSlice.reducer;
