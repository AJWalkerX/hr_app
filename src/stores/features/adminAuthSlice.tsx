import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdminLoginRequest } from "../../models/Request/IAdminLoginRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import Swal from "sweetalert2";
import { authSlice } from ".";

const initialAdminAuthState = {
  isAdminAuth: false,
  isAdminLoginLoading: false,

  admin: {},
};

export const fetchAdminLogin = createAsyncThunk(
  "adminAuth/fetchAdminLogin",
  async (payload: IAdminLoginRequest, { rejectWithValue }) => {
    try {
      const response = await fetch(apis.adminAuthService + "/adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data); // Hatalı yanıt durumunda
      }
      return data; // Başarılı yanıt
    } catch (error: any) {
      return rejectWithValue({ message: "Ağ hatası", error });
    }
  }
);

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: initialAdminAuthState,
  reducers: {
    adminLogout(state) {
      state.isAdminAuth = false;
      localStorage.removeItem("adminToken");
    },
    adminLogin(state) {
      if (localStorage.getItem("adminToken")) {
        state.isAdminAuth = true;
      }
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchAdminLogin.pending, (state) => {
      state.isAdminLoginLoading = true;
    });
    build.addCase(
      fetchAdminLogin.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isAdminLoginLoading = false;
        if (action.payload.code === 200) {
          state.isAdminAuth = true;
          localStorage.setItem("adminToken", action.payload.data);
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

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
