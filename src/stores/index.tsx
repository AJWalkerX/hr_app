import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { authSlice, commentSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: authSlice,
    comment: commentSlice
  },
});

export type hrDispatch = typeof store.dispatch;
export type hrState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<hrState>();
export default store;
