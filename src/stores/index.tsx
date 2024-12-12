import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {},
});

export type hrDispatch = typeof store.dispatch;
export type hrState = ReturnType<typeof store.getState>;
export const useAppSelector = useSelector.withTypes<hrState>();
export default store;
