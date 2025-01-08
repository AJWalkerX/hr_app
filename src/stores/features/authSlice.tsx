import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { ILoginRequest } from "../../models/Request/ILoginRequest";
import apis from "../../config/RestApis";
import { IRegisterRequest } from "../../models/Request/IRegisterRequest";
import Swal from "sweetalert2";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IForgotPasswordRequest } from "../../models/Request/IForgotPasswordRequest";
import { INewPasswordRequest } from "../../models/INewForgotPasswordRequest";
import { ILoginResponse } from "../../models/Response/ILoginResponse";
import { IUserModel } from "../../models/IUserModel";

interface IAuthState {
  loginResponse: ILoginResponse | null;
  isAuth: boolean;
  isLoginLoading: boolean;
  isRegisterLoading: boolean;
  user: IUserModel | null;
  isManagerLogin: boolean;
}

const initialAuthState: IAuthState = {
  loginResponse: null,
  user: null,
  isAuth: false,
  isLoginLoading: false,
  isRegisterLoading: false,
  isManagerLogin: false,
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

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      localStorage.removeItem("token");
    },
    login(state) {
      const token = localStorage.getItem("token");
      if (token) {
        state.isAuth = true;
        state.isManagerLogin = state.loginResponse?.position === "MANAGER";
      }
    },
  },
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
          state.loginResponse = action.payload.data;

          if (state.loginResponse?.token) {
            localStorage.setItem("token", state.loginResponse.token);
          }
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
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
