import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";
import { ILoginRequest } from "../../models/ILoginRequest";
import apis from "../../config/RestApis";
import { RegisterRequest } from "../../models/IRegisterRequest";
import Swal from "sweetalert2";
import { IBaseResponse } from "../../models/IBaseResponse";

const initialAuthState = {
  isAuth: false,
  isLoginLoading: false,
  isRegisterLoading: false,
  user: {},
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (payload: ILoginRequest) => {
    const response = await fetch(apis.userService + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (payload: RegisterRequest) => {
    const response = await fetch(apis.userService + "/register", {
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
            timer: 1500,
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
        } else {
        }
      }
    );
  },
});

export default authSlice.reducer;
