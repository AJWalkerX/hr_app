import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOnWaitCustomers } from "../../models/IOnWaitCustomers";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/IBaseResponse";
import { ICustomers } from "../../models/ICustomers";

interface IAdminPanelState {
  onWaitCustomerList: IOnWaitCustomers[];
  isOnWaitCustomerListLoading: boolean;
  customerList: ICustomers[];
  isCustomerListLoading: boolean;
}

const initialWaitCustomerState: IAdminPanelState = {
  onWaitCustomerList: [],
  isOnWaitCustomerListLoading: false,
  customerList: [],
  isCustomerListLoading: false,
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

const adminPanelSlice = createSlice({
  name: "adminpanel",
  initialState: initialWaitCustomerState,
  reducers: {},

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
  },
});
export default adminPanelSlice.reducer;
