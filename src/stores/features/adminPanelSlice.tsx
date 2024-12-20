import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOnWaitCustomers } from "../../models/IOnWaitCustomers";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import { ICustomers } from "../../models/ICustomers";
import { IUserIdRequest } from "../../models/IUSerIdRequest";
import { IUserAuthorize } from "../../models/IUserAuthorize";
import { IUpdateCustomerRequest } from "../../models/IUpdateCustomerRequest";

interface IAdminPanelState {
  onWaitCustomerList: IOnWaitCustomers[];
  isOnWaitCustomerListLoading: boolean;
  customerList: ICustomers[];
  isCustomerListLoading: boolean;
  customer: ICustomers | null;
  isCustomerUpdateLoading: boolean;
}

const initialWaitCustomerState: IAdminPanelState = {
  onWaitCustomerList: [],
  isOnWaitCustomerListLoading: false,
  customerList: [],
  isCustomerListLoading: false,
  customer: null,
  isCustomerUpdateLoading: false,
};

export const fetchListUserOnWait = createAsyncThunk(
  "adminpanel/fetchListUserOnWait",
  async () => {
    return await fetch(apis.adminPanelService + "/list-user-on-wait").then(
      (data) => data.json()
    );
  }
);

export const fetchCustomerList = createAsyncThunk(
  "adminpanel/fetchCustomerList ",
  async () => {
    return await fetch(apis.adminPanelService + "/list-customer").then((data) =>
      data.json()
    );
  }
);
export const fetchUserAuthorisation = createAsyncThunk(
  "adminpanel/fetchUserAuthorisation",
  async (payload: IUserAuthorize) => {
    const response = await fetch(
      apis.adminPanelService + "/user-authorisation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    ).then((data) => data.json());
    return response;
  }
);

export const fetchUpdateCustomer = createAsyncThunk(
  "adminpanel/fetchUpdateCustomer",
  async (payload: IUpdateCustomerRequest) => {
    const response = await fetch(apis.adminPanelService +"/update-company",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),


    }).then((data) => data.json());
    return response;

  }

);

const adminPanelSlice = createSlice({
  name: "adminpanel",
  initialState: initialWaitCustomerState,
  reducers: {
    removeUserFromList: (state, action: PayloadAction<number>) => {
      state.onWaitCustomerList = state.onWaitCustomerList.filter(
        (user) => user.userId !== action.payload
      );
    },
  },

  extraReducers: (build) => {
    build.addCase(fetchListUserOnWait.pending, (state) => {
      state.isOnWaitCustomerListLoading = true;
    });
    build.addCase(
      fetchListUserOnWait.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isOnWaitCustomerListLoading = false;
        if (action.payload.code === 200) {
          state.onWaitCustomerList = action.payload.data;
        }
      }
    );

    build.addCase(fetchCustomerList.pending, (state) => {
      state.isCustomerListLoading = true;
    });
    build.addCase(
      fetchCustomerList.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isCustomerListLoading = false;
        if (action.payload.code === 200) {
          state.customerList = action.payload.data;
        }
      }
    );
    build.addCase(fetchUserAuthorisation.pending, (state) => {
      state.isOnWaitCustomerListLoading = true;
    });
    build.addCase(fetchUserAuthorisation.fulfilled, (state, action) => {
      state.isOnWaitCustomerListLoading = false;
      if (action.payload.code === 200) {
        state.customerList = action.payload.data;
      }
    });
    build.addCase(fetchUpdateCustomer.pending, (state) =>{
      state.isCustomerUpdateLoading = true;
       });
    build.addCase(fetchUpdateCustomer.fulfilled,
      (state, action : PayloadAction<IBaseResponse>) =>{
        state.isCustomerUpdateLoading =false;
        if(action.payload.code===200){
          state.customer = action.payload.data;
        }
      }
    )
  },
});
export const { removeUserFromList } = adminPanelSlice.actions;
export default adminPanelSlice.reducer;
