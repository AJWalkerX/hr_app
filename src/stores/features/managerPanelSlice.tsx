import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListEmployeeListResponse } from "../../models/Response/IListEmployeeListResponse";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";

interface IManagerPanelState{
    employeeList: IListEmployeeListResponse[];
    isEmployeeListLoading : boolean;
}

const initialListEmployeeState : IManagerPanelState ={
    employeeList: [],
    isEmployeeListLoading : false,
}

export const fecthEmployeeListByCompany = createAsyncThunk(
    "manager/fecthEmployeeListByCompany",
    async() =>{
        return await fetch(apis.managerService + '/employees').then(data=>data.json())
    }
);

const managerSlice = createSlice({
    name: 'manager' ,
    initialState: initialListEmployeeState,
    reducers:{},

    extraReducers: (build)=>{

        build.addCase(fecthEmployeeListByCompany.pending,(state)=>{state.isEmployeeListLoading = true});
        build.addCase(fecthEmployeeListByCompany.fulfilled,(state,action: PayloadAction<IBaseResponse>)=>{
            state.isEmployeeListLoading = false;
            if(action.payload.code === 200){
                state.employeeList = action.payload.data;
            }
        });
    }
})

export default managerSlice.reducer;