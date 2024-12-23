import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { adminAuthSlice, adminPanelSlice, authSlice, commentSlice, forgotPasswordSlice } from "./features";

const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminAuthSlice,
    comment: commentSlice,
    forgotPassword: forgotPasswordSlice,
    adminpanel: adminPanelSlice ,
    
  },
});

export type hrDispatch = typeof store.dispatch;
export type hrState = ReturnType<typeof store.getState>;
export const hrUseSelector = useSelector.withTypes<hrState>();
export default store;
