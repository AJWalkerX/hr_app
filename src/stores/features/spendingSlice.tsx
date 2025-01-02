import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddPersonalSpendingRequest } from "../../models/Request/IAddPersonalSpendingRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IPersonalSpendingResponse } from "../../models/Response/IPersonalSpendingResponse";

interface ISpendingState{
    addSpending: IAddPersonalSpendingRequest | null,
    isAddSpendingLoading: boolean

    spendingList: IPersonalSpendingResponse[],
    isPersonalSpendingListLoading: boolean
}

const initialSpendingState: ISpendingState = {
    addSpending: null,
    isAddSpendingLoading: false,

    spendingList: [],
    isPersonalSpendingListLoading: false,

}

export const fetchGetPersonalSpendingList = createAsyncThunk(
    "spending/fetchGetPersonalSpendingList",
    async () => {
        const spendingToken = localStorage.getItem("token");
        return await fetch(
            apis.spendingService + "/get-personal-spendings?token=" + spendingToken
        ).then((data)=> data.json());
    }
);

export const fetchAddSpending = createAsyncThunk(
    "spending/fetchAddSpending",
    async(payload:IAddPersonalSpendingRequest)=>{
        const token = localStorage.getItem("token");
        const requestBody  = {
            ...payload,
            token: token,
        };
        const response = await fetch(apis.spendingService+'/add-personal-spending',{
            method:"POST" ,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        }).then((data) => data.json());
        return response;
    }
)

const spendingSlice = createSlice({
    name:'spending',
    initialState: initialSpendingState,
    reducers:{},

    extraReducers: (build) =>{
        build.addCase(fetchAddSpending.pending,(state)=>{state.isAddSpendingLoading=true});
        build.addCase(fetchAddSpending.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isAddSpendingLoading = false;
            if(action.payload.code === 200){
                state.addSpending = action.payload.data;
            }
        });
        build.addCase(fetchGetPersonalSpendingList.pending, (state) => {
            state.isPersonalSpendingListLoading = true;
        });
        build.addCase(fetchGetPersonalSpendingList.fulfilled,
            (state, action: PayloadAction<IBaseResponse>) => {
                state.isPersonalSpendingListLoading = false;
                if (action.payload.code ===200) {
                    state.spendingList = action.payload.data;
                }
            });
    }
})

export default spendingSlice.reducer