import {
  configureStore,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IForgotPasswordRequest } from "../../models/IForgotPasswordRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import Swal from "sweetalert2";

const initialState = {
  isForgotPasswordLoading: false,
  isResetPasswordLoading: false,
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
  },
});

export default forgotPasswordSlice.reducer;
