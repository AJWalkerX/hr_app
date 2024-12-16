import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authSlice, commentSlice, forgotPasswordSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: authSlice,
    comment: commentSlice,
    forgotPassword: forgotPasswordSlice,
  },
});

export type hrDispatch = typeof store.dispatch;
export type hrState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<hrState>();
export default store;
