import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import React from 'react'
import apis from '../../config/RestApis';


interface IUserProfileSettings{
userProfileSettings: IUserProfileSettings | null ;
isUserProfileSettingsLoading: boolean;
}

const initialUserProfileSettingsState: IUserProfileSettings = {
    userProfileSettings: null,
    isUserProfileSettingsLoading: false
}

export const fetchUserProfileSettings = createAsyncThunk(
    "userpanel/fetchUserProfileSettings",
    async () =>{
        return await fetch(apis.userPanelService + "/user-profile-settings").then(
            (data) => data.json()
        );
    }
);

const userPanelSlice = createSlice({
    name:"userpanel",
    initialState: initialUserProfileSettingsState,
    reducers: {

        
    }
})


