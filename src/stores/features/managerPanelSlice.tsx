import { createAsyncThunk } from "@reduxjs/toolkit";
import { IListEmployeeListResponse } from "../../models/Response/IListEmployeeListResponse";

interface IManagerPanelState{
    employeeList: IListEmployeeListResponse[];
    isEmployeeListLoading : boolean;
}

const initialListEmployeeState : IManagerPanelState ={
    employeeList: [],
    isEmployeeListLoading : false,
}

export const fecthEmployeeListByCompany = createAsyncThunk(

    "managerpanel/fecthEmployeeListByCompany",
    async() =>{
        
    }
)