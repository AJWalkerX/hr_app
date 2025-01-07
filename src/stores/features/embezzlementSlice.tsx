import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmbezzlementResponseDto } from "../../models/Response/IEmbezzlementResponseDto";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IAddEmbezzlementRequestDto } from "../../models/Request/IAddEmbezzlementRequestDto";
import { IAssignmentEmbezzlementRequest } from "../../models/Request/IAssignmentEmbezzlementRequestDto";
import { IGetEmbezzlementDetailsResponse } from "../../models/Response/IGetEmbezzlementDetailsResponse";

// State tipini tanımlıyoruz
interface IEmbezzlementState {
  embezzlementList: IEmbezzlementResponseDto[];
  isEmbezlementListLoading: boolean;

  addEmbezzlement: IAddEmbezzlementRequestDto | null;
  isAddEmbezzlementLoading: boolean;

  isAssigmentEmbezzlementLoading: boolean;
}

// Başlangıç durumu
const initialEmbezzlementState: IEmbezzlementState = {
 
  embezzlementList: [],
  isEmbezlementListLoading: false,
  addEmbezzlement: null,
  isAddEmbezzlementLoading: false,
  isAssigmentEmbezzlementLoading: false,
};



export const fetchAssigmentEmbezzlement = createAsyncThunk(
  "embezzlement/fetchAssigmentEmbezzlement",
  async (payload: IAssignmentEmbezzlementRequest) => {
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
  async (payload: IAddEmbezzlementRequestDto) => {
    const token = localStorage.getItem("token");
    const requestBody = {
      ...payload,
      token: token,
    };
    const response = await fetch(apis.embezzlementService + '/add-embezzlement', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);


const embezzlementSlice = createSlice({
  name: "embezzlement",
  initialState: initialEmbezzlementState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchEmbezzlementListByCompany.pending, (state) => {
      state.isEmbezlementListLoading = true;
    });
    builder.addCase(
      fetchEmbezzlementListByCompany.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isEmbezlementListLoading = false;
        if (action.payload.code === 200) {
          state.embezzlementList = action.payload.data;
        }
      }
    );
    builder.addCase(fetchAddEmbezzlement.pending, (state) => {
      state.isAddEmbezzlementLoading = true;
    });
    builder.addCase(fetchAddEmbezzlement.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
      state.isAddEmbezzlementLoading = false;
      if (action.payload.code === 200) {
        state.addEmbezzlement = action.payload.data;
      }
    });

    builder.addCase(fetchAssigmentEmbezzlement.pending, (state) => {
      state.isAssigmentEmbezzlementLoading = true;
    });
    builder.addCase(fetchAssigmentEmbezzlement.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
      state.isAssigmentEmbezzlementLoading = false;
      if (action.payload.code === 200 && action.payload.data) {
        const updatedEmbezzlement = action.payload.data;
        state.embezzlementList = state.embezzlementList.map(embezzlement =>
          embezzlement.embezzlementId === updatedEmbezzlement.id
            ? { ...embezzlement, ...updatedEmbezzlement }
            : embezzlement
        );
      }
    });
  },
});

export default embezzlementSlice.reducer;
