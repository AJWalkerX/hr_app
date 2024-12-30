import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IListEmployeeListResponse } from "../../models/Response/IListEmployeeListResponse";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";
import { IUserPermitResponse } from "../../models/Response/IUserPermitResponse";
import exp from "constants";
import { IHolidayAuthorizeRequest } from "../../models/Request/IHolidayAuthorizeRequest";
import Swal from "sweetalert2";
import { IUpdateEmployeeRequest } from "../../models/Request/IUpdateEmployeeRequest";
import { INewEmployeeRequest } from "../../models/Request/INewEmployeeRequest";

interface IManagerPanelState {
  employeeList: IListEmployeeListResponse[];
  isEmployeeListLoading: boolean;
  userPermitCardList: IUserPermitResponse[];
  isUserPermitCardListLoading: boolean;
  isPermitAuthoriseLoading: boolean;
  isPermitListEmpty: boolean;
  isAddNewEmployeeLoading: boolean;
}

const initialListEmployeeState: IManagerPanelState = {
  employeeList: [],
  isEmployeeListLoading: false,
  userPermitCardList: [],
  isUserPermitCardListLoading: false,
  isPermitAuthoriseLoading: false,
  isPermitListEmpty: false,
  isAddNewEmployeeLoading: false,
};

export const fetchUpdateEmployee = createAsyncThunk(
  "manager/fetchUpdateEmployee",
  async (payload: IUpdateEmployeeRequest) => {
    const token = localStorage.getItem("token");
    const requestBody = {
      ...payload,
      token: token,
    };
    const response = await fetch(
      apis.managerService + "/employee-update-information",
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

export const fetchGetUserPermitInfo = createAsyncThunk(
  "manager/fetchGetUserPermitInfo",
  async () => {
    return await fetch(apis.managerService + "/get-user-permit-list").then(
      (data) => data.json()
    );
  }
);

export const fetchAddNewEmployee = createAsyncThunk(
  "manager/fetchAddNewEmployee",
  async (payload: INewEmployeeRequest) => {
    const token = localStorage.getItem("token");
    const requestBody = {
      ...payload,
      token: token,
    };
    const response = await fetch(apis.managerService + "/add-new-employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }).then((data) => data.json());
    return response;
  }
);

export const fetchEmployeeListByCompany = createAsyncThunk(
  "manager/fecthEmployeeListByCompany",
  async () => {
    const managerToken = localStorage.getItem("token");
    return await fetch(
      apis.managerService + "/employees?token=" + managerToken
    ).then((data) => data.json());
  }
);

export const fetchPermitAuthorisation = createAsyncThunk(
  "manager/fetchPermitAuthorisation",
  async (payload: IHolidayAuthorizeRequest) => {
    const token = localStorage.getItem("token");
    const requestBody = {
      ...payload,
      token: token,
    };
    const response = await fetch(
      apis.managerService + "/permit-authorization",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    ).then((data) => data.json());
    return response;
  }
);

const managerSlice = createSlice({
  name: "manager",
  initialState: initialListEmployeeState,
  reducers: {
    removeUserFromPermitList: (state, action: PayloadAction<number>) => {
      state.userPermitCardList = state.userPermitCardList.filter(
        (user) => user.userId !== action.payload
      );
    },
  },

  extraReducers: (build) => {
    build.addCase(fetchAddNewEmployee.pending, (state) => {
      state.isAddNewEmployeeLoading = true;
    });
    build.addCase(
      fetchAddNewEmployee.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isAddNewEmployeeLoading = false;
        if (action.payload.code === 200) {
          Swal.fire({
            icon: "success",
            title: action.payload.message,
            timer: 3000,
          });
          state.employeeList.push(action.payload.data);
        } else {
          Swal.fire({
            icon: "error",
            title: action.payload.message,
            timer: 3000,
          });
        }
      }
    );
    build.addCase(fetchUpdateEmployee.pending, (state) => {
      state.isAddNewEmployeeLoading = true;
    });
    build.addCase(
      fetchUpdateEmployee.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isAddNewEmployeeLoading = false;
        if (action.payload.code === 200) {
          Swal.fire({
            icon: "success",
            title: action.payload.message,
            timer: 3000,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: action.payload.message,
            timer: 3000,
          });
        }
      }
    );
    build.addCase(fetchEmployeeListByCompany.pending, (state) => {
      state.isEmployeeListLoading = true;
    });
    build.addCase(
      fetchEmployeeListByCompany.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isEmployeeListLoading = false;
        if (action.payload.code === 200) {
          state.employeeList = action.payload.data;
        }
      }
    );

    build.addCase(fetchGetUserPermitInfo.pending, (state) => {
      state.isUserPermitCardListLoading = true;
    });
    build.addCase(
      fetchGetUserPermitInfo.fulfilled,
      (state, action: PayloadAction<IBaseResponse>) => {
        state.isUserPermitCardListLoading = false;
        if (action.payload.code === 200) {
          state.userPermitCardList = action.payload.data;
          state.isPermitListEmpty = false;
        } else if (action.payload.code === 7003) {
          state.isPermitListEmpty = true;
        }
      }
    );

    build.addCase(fetchPermitAuthorisation.pending, (state) => {
      state.isPermitAuthoriseLoading = true;
    });
    build.addCase(fetchPermitAuthorisation.fulfilled, (state) => {
      state.isPermitAuthoriseLoading = false;
    });
  },
});

export const { removeUserFromPermitList } = managerSlice.actions;
export default managerSlice.reducer;
