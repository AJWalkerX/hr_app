import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmbezzlementResponseDto } from "../../models/Response/IEmbezzlementResponseDto";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";


interface IEmbezzlementState{
    embezzlementList: IEmbezzlementResponseDto[],
    isEmbezlementListLoading:boolean,
}

const initialEmbezzlementState: IEmbezzlementState = {
    embezzlementList: [],
    isEmbezlementListLoading: false,
}

export const fetchEmbezzlementListByCompany = createAsyncThunk(
    "embezzlement/fetchEmbezzlementListByCompany",
    async () => {
        const managerToken = localStorage.getItem("token");
        return await fetch(
            apis.embezzlementService + "/get-embezzlement-list?token=" + managerToken
        ).then((data) => data.json());
    }
);

const embezzlementSlice = createSlice({
    name:'embezzlement',
    initialState: initialEmbezzlementState,
    reducers:{},

    extraReducers: (build) =>{
        build.addCase(fetchEmbezzlementListByCompany.pending, (state) => {
            state.isEmbezlementListLoading = true;
        });
        build.addCase(
            fetchEmbezzlementListByCompany.fulfilled,
            (state, action: PayloadAction<IBaseResponse>) => {
                state.isEmbezlementListLoading = false;
                if (action.payload.code === 200) {
                  state.embezzlementList = action.payload.data;  
                }
            } 
        );
        
    }
})

export default  embezzlementSlice.reducer;