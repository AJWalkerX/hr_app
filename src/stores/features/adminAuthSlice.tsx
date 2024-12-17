import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdminLoginRequest } from "../../models/IAdminLoginRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import Swal from "sweetalert2";
import { authSlice } from ".";

const initialAdminAuthState = {
    isAdminAuth: false,
    isAdminLoginLoading: false,
  
    admin: {},
};

export const fetchAdminLogin = createAsyncThunk(
    "adminAuth/fetchAdminLogin",
    async (payload: IAdminLoginRequest) => {
        const response = await fetch(apis.adminAuthService + "/adminlogin",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }).then((data) => data.json());
        return response;
    }
);

const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState: initialAdminAuthState,
    reducers: {
        adminLogout(state){
            state.isAdminAuth = false
        },
        adminLogin(state){
            state.isAdminAuth = true;
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchAdminLogin.pending, (state) => {
            state.isAdminLoginLoading = true;
        });
        build.addCase(fetchAdminLogin.fulfilled,
            (state, action: PayloadAction<IBaseResponse>) => {
                state.isAdminLoginLoading = false;
                if ( action.payload.code === 200) {
                    state.isAdminAuth = true;
                    localStorage.setItem("adminToken", action.payload.data);
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Hata!",
                        text: action.payload.message
                    });
                }
            }
        )
    }
});

export const {adminLogin,adminLogout} = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
