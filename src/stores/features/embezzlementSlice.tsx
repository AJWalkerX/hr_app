import { createSlice } from "@reduxjs/toolkit";
import { IEmbezzlementResponseDto } from "../../models/Response/IEmbezzlementResponseDto";


interface IEmbezzlementState{
    embezzlementList: IEmbezzlementResponseDto[],
    isEmbezlementListLoading:boolean,
}

const initialEmbezzlementState: IEmbezzlementState = {
    embezzlementList: [],
    isEmbezlementListLoading: false,
}

const embezzlementSlice = createSlice({
    name:'embezzlement',
    initialState: initialEmbezzlementState,
    reducers:{},

    extraReducers: (build) =>{

    }
})

export default  embezzlementSlice.reducer;