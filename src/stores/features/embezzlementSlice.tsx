import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmbezzlementResponseDto } from "../../models/Response/IEmbezzlementResponseDto";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IAddEmbezzlementRequestDto } from "../../models/Request/IAddEmbezzlementRequestDto";
import { IAssignmentEmbezzlementRequest } from "../../models/Request/IAssignmentEmbezzlementRequestDto";


interface IEmbezzlementState{
    embezzlementList: IEmbezzlementResponseDto[],
    isEmbezlementListLoading:boolean,

    addEmbezzlement: IAddEmbezzlementRequestDto | null,
    isAddEmbezzlementLoading: boolean,

    isAssigmentEmbezzlementLoading: boolean,
}

const initialEmbezzlementState: IEmbezzlementState = {
    embezzlementList: [],
    isEmbezlementListLoading: false,
    addEmbezzlement: null,
    isAddEmbezzlementLoading: false,
    isAssigmentEmbezzlementLoading: false,
}

export const fetchAssigmentEmbezzlement = createAsyncThunk(
    "embezzlement/fetchAssigmentEmbezzlement",
    async(payload: IAssignmentEmbezzlementRequest)=> {
        const token = localStorage.getItem("token");
        const requestBody = {
            ...payload,
            token: token,
        };
        const response = await fetch(
            apis.embezzlementService + "/assignment-embezzlement",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            }
        ).then((data) => data.json());
        return response;
    }
);

export const fetchEmbezzlementListByCompany = createAsyncThunk(
    "embezzlement/fetchEmbezzlementListByCompany",
    async () => {
        const managerToken = localStorage.getItem("token");
        return await fetch(
            apis.embezzlementService + "/get-embezzlement-list?token=" + managerToken
        ).then((data) => data.json());
    }
);

export const fetchAddEmbezzlement = createAsyncThunk(
    "embezzlement/fetchAddEmbezzlement",
    async(payload:IAddEmbezzlementRequestDto)=>{
        const token = localStorage.getItem("token");
        const requestBody = {
            ...payload,
            token: token,
        };
        const response = await fetch(apis.embezzlementService+'/add-embezzlement',{
            method: "POST",
            headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
        }).then((data) => data.json());
        return response;
    }
)

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
        build.addCase(fetchAddEmbezzlement.pending,(state)=>{state.isAddEmbezzlementLoading=true});
        build.addCase(fetchAddEmbezzlement.fulfilled,(state,action:PayloadAction<IBaseResponse>)=>{
            state.isAddEmbezzlementLoading = false;
            if(action.payload.code === 200){
                state.addEmbezzlement = action.payload.data;
            }
        });
        build.addCase(fetchAssigmentEmbezzlement.pending, (state) => {
            state.isAssigmentEmbezzlementLoading=true;
        });
        build.addCase(fetchAssigmentEmbezzlement.fulfilled,
            (state, action: PayloadAction<IBaseResponse>) => {
                state.isAssigmentEmbezzlementLoading = false;
                if(action.payload.code === 200) {
                    state.embezzlementList = action.payload.data
                }
            }
        );
        
    }
})

export default  embezzlementSlice.reducer;