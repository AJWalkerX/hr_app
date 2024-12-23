import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from 'react'
import apis from '../../config/RestApis';
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IUserPermitResponse } from "../../models/Response/IUserPermitResponse";


interface IUserProfileSettings{
userProfileSettings: IUserProfileSettings | null ;
isUserProfileSettingsLoading: boolean;
userPermitCardList: IUserPermitResponse[];
isUserPermitCardListLoading:boolean;
}

const initialUserProfileSettingsState: IUserProfileSettings = {
    userProfileSettings: null,
    isUserProfileSettingsLoading: false,
    userPermitCardList: [],
    isUserPermitCardListLoading : false
}

export const fetchGetUserPermitInfo = createAsyncThunk(
    "userpanel/fetchGetUserPermitInfo",
    async()=>{
        return await fetch(apis.userService + '/get-user-permit-list').then(data => data.json())
    }
)

export const fetchUserProfileSettings = createAsyncThunk(
    "userpanel/fetchUserProfileSettings",
    async ( ) =>{
        const token = localStorage.getItem("token");
        return await fetch(apis.userService + "/get-user-profile-info?token=" + token)
        .then((data) => data.json())
    }
);


const userPanelSlice = createSlice({
    name:"userpanel",
    initialState: initialUserProfileSettingsState,
    reducers: {

        
    },

    extraReducers: (build) =>{

        build.addCase(fetchUserProfileSettings.pending,(state)=>{state.isUserProfileSettingsLoading = true});
        build.addCase(fetchUserProfileSettings.fulfilled,(state,action: PayloadAction<IBaseResponse>) => {
            state.isUserProfileSettingsLoading = false;
            if(action.payload.code === 200) {
                state.userProfileSettings = action.payload.data;
            }
        });
        build.addCase(fetchGetUserPermitInfo.pending,(state)=>{state.isUserPermitCardListLoading=true});
        build.addCase(fetchGetUserPermitInfo.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isUserPermitCardListLoading = false ;
            if(action.payload.code===200){
                state.userPermitCardList = action.payload.data
            }
        });
    }

})

export default userPanelSlice.reducer;

