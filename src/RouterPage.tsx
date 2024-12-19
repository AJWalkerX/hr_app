import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminHomePage from "./pages/AdminHomePage";
import AdminCustomersPage from "./pages/AdminCustomersPage";
import AdminWaitCustomersPage from "./pages/AdminWaitCustomersPage";
import SetNewPasswordPage from "./pages/SetNewPasswordPage";
import { hrDispatch, hrUseSelector } from "./stores";
import { useDispatch } from "react-redux";
import { adminLogin, fetchAdminLogin } from "./stores/features/adminAuthSlice";
import UserInformationPage from "./pages/UserInformationPage";

function RouterPage() {
  const dispatch = useDispatch<hrDispatch>();
  const isAdminLogin = hrUseSelector((state) => state.adminAuth.isAdminAuth);
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      dispatch(adminLogin());
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/admin" element={isAdminLogin ? <AdminHomePage /> : <AdminLoginPage/>}/>
        <Route path="/admin-login" element={<AdminLoginPage />}/>
        <Route path="/admin/customers" element={isAdminLogin ? <AdminCustomersPage/> : <AdminLoginPage/>}/>
        <Route path="/admin/wait-customers" element={isAdminLogin ? <AdminWaitCustomersPage/> : <AdminLoginPage/>}/>
        <Route path="/user-information" element={<UserInformationPage />}/>
        <Route
          path="/set-new-password"
          element={<SetNewPasswordPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
