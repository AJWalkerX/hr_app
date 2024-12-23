import { buildCreateSlice, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICustomers } from "../../models/Response/ICustomersResponse";
import { IUpdateCustomerRequest } from "../../models/Request/IUpdateCustomerRequest";
import apis from "../../config/RestApis";
import { IBaseResponse } from "../../models/Response/IBaseResponse";

interface ICompanyState {
  
    customer: ICustomers | null;
  isCustomerUpdateLoading: boolean;
}


const initialcompanyState: ICompanyState = {
    customer: null,
    isCustomerUpdateLoading: false,
  };


  export const fetchUpdateCustomer = createAsyncThunk(
    "company/fetchUpdateCustomer",
    async (payload: IUpdateCustomerRequest) => {
      const response = await fetch(apis.companyService +"/update-company",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
  
  
      }).then((data) => data.json());
      return response;
  
    }
  
  );

  const companySlice = createSlice({
    name: "company",
    initialState: initialcompanyState,
    reducers: {
 
    },

    extraReducers: (build) =>{
        build.addCase(fetchUpdateCustomer.pending, (state) =>{
            state.isCustomerUpdateLoading = true;
             });
             build.addCase(
              fetchUpdateCustomer.fulfilled,
              (state, action: PayloadAction<IBaseResponse>) => {
                state.isCustomerUpdateLoading = false;
                if (action.payload.code === 200) {
                  state.customer = action.payload.data;
                  
                 
              }
    });
    }
    
       
  })

  export default companySlice.reducer;
 
