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

  embezzlementDetails: IGetEmbezzlementDetailsResponse | null;
  isEmbezzlementDetailsLoading: boolean;

  addEmbezzlement: IAddEmbezzlementRequestDto | null;
  isAddEmbezzlementLoading: boolean;

  isAssigmentEmbezzlementLoading: boolean;
}

// Başlangıç durumu
const initialEmbezzlementState: IEmbezzlementState = {
  embezzlementDetails: null,
  isEmbezzlementDetailsLoading: false,
  embezzlementList: [],
  isEmbezlementListLoading: false,
  addEmbezzlement: null,
  isAddEmbezzlementLoading: false,
  isAssigmentEmbezzlementLoading: false,
};

export const fetchGetEmbezzlementDetails = createAsyncThunk(
    'embezzlement/fetchGetEmbezzlementDetails',
    async (embezzlementId: number) => {
      const response = await fetch(`/api/embezzlements/${embezzlementId}`);
      return response.json();  
    }
  );

// Zimmet atama işlemi için async thunk
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

// Zimmet listesi almak için async thunk
export const fetchEmbezzlementListByCompany = createAsyncThunk(
  "embezzlement/fetchEmbezzlementListByCompany",
  async () => {
    const managerToken = localStorage.getItem("token");
    return await fetch(
      apis.embezzlementService + "/get-embezzlement-list?token=" + managerToken
    ).then((data) => data.json());
  }
);

// Yeni zimmet eklemek için async thunk
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

// Slice tanımlamaları
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

    builder.addCase(fetchGetEmbezzlementDetails.pending, (state) => {
      state.isEmbezzlementDetailsLoading = true;
    });
    builder.addCase(fetchGetEmbezzlementDetails.fulfilled, (state, action: PayloadAction<IBaseResponse>) => {
      state.isEmbezzlementDetailsLoading = false;
      const data = action.payload;

      if (data.code === 200) {
        state.embezzlementDetails = data.data; // Veriyi state'e kaydediyoruz
      }
    });
  },
});

export default embezzlementSlice.reducer;
