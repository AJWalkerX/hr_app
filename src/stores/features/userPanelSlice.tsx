import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IUserPermitResponse } from "../../models/Response/IUserPermitResponse";
import { IUserPermitRequest } from "../../models/Request/IUserPermitRequest";
import Swal from "sweetalert2";
import { IUpdateUserProfileSettings } from "../../models/Request/IUpdateUserProfileSettings";
import { IUserPermitViewResponse } from "../../models/Response/IUserPermitViewResponse";

interface IUserProfileSettings {
  userProfileSettings: IUserProfileSettings | null;
  isUserProfileSettingsLoading: boolean;
  isUpdateProfileSettingsLoading: boolean

  userCreatePermit: IUserPermitRequest | null;
  isUserCreatePermitLoading: boolean;

  viewPermitCardList: IUserPermitViewResponse[];
  isViewPermitCardListLoading: boolean;
}

const initialUserProfileSettingsState: IUserProfileSettings = {
  userProfileSettings: null,
  isUserProfileSettingsLoading: false,
 
  userCreatePermit: null,
  isUserCreatePermitLoading: false,

  isUpdateProfileSettingsLoading: false,

  
  viewPermitCardList: [],
  isViewPermitCardListLoading: false,
};


export const fetchUserPermitView = createAsyncThunk(
  "userpanel/fetchUserPermitView",
  async () => {
    const token = localStorage.getItem("token");
    return await fetch(
      apis.userService + "/get-all-view-user-permit?token=" + token
    ).then((data) => data.json());
  }
);



export const fetchUserPermitCreate = createAsyncThunk(
  "userpanel/fetchUserPermitCreate",
  async (payload: IUserPermitRequest) => {
    const token = localStorage.getItem("token");
    const requestBody = { ...payload, token: token };
    const response = await fetch(apis.userService + "/create-holiday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);



export const fetchUserProfileSettings = createAsyncThunk(
  "userpanel/fetchUserProfileSettings",
  async () => {
    const token = localStorage.getItem("token");
    return await fetch(
      apis.userService + "/get-user-profile-info?token=" + token
    ).then((data) => data.json());
  }
);

export const fetchUpdateProfileSettings = createAsyncThunk(
  "userpanel/fetchUpdateProfileSettings",
  async (payload:IUpdateUserProfileSettings) =>{
    const response =await fetch(apis.userService+'/user-update-information',{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
)


const userPanelSlice = createSlice({
  name: "userpanel",
  initialState: initialUserProfileSettingsState,
  reducers: {},

  extraReducers: (build) => {
    build.addCase(fetchUserProfileSettings.pending, (state) => {
      state.isUserProfileSettingsLoading = true;
    });
    build.addCase(
      fetchUserProfileSettings.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isUserProfileSettingsLoading = false;
        if (action.payload.code === 200) {
          state.userProfileSettings = action.payload.data;
        }
      }
    );

    build.addCase(fetchUpdateProfileSettings.pending,(state)=>{
      state.isUpdateProfileSettingsLoading=true;
    });
    build.addCase(
      fetchUpdateProfileSettings.fulfilled,
      (state, action:PayloadAction<IBaseResponse>)=>{
        state.isUpdateProfileSettingsLoading = false;
        if(action.payload.code === 200){
          state.userProfileSettings = action.payload.data;
        }
      });
   
    
   

    build.addCase(fetchUserPermitCreate.pending, (state) => {
      state.isUserCreatePermitLoading = true;
    });
    build.addCase(
      fetchUserPermitCreate.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isUserCreatePermitLoading = false;
        if (action.payload.code === 200) {
          state.userCreatePermit = action.payload.data;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Hata!',
            text: action.payload.message || 'Girdiğiniz tarih aralığı hatalıdır.',
          });
        }
      }
    );

    build.addCase(fetchUserPermitView.pending, (state)=>{
      state.isViewPermitCardListLoading = true;
    });
    build.addCase(
      fetchUserPermitView.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) =>{
        state.isViewPermitCardListLoading =false;
        if(action.payload.code === 200){
          state.viewPermitCardList = action.payload.data;
        }
      }
    );
    
  },
});

export default userPanelSlice.reducer;
