import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "domain";
import { ILoginRequest } from "../../models/ILoginRequest";
import apis from "../../config/RestApis";

const initalAuthState = {
  isAuth: false,
  isLoginLoading: false,
  isRegisterLoading: false,
  user: {},
};

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (payload: ILoginRequest) => {
    const response = await fetch(apis.userService + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((data) => data.json());
    return response;
  }
);
