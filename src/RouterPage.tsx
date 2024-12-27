import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import {
  adminLogin,
  adminLogout,
  fetchAdminLogin,
} from "./stores/features/adminAuthSlice";
import UserInformationPage from "./pages/UserInformationPage";
import UserProfileSettingsPage from "./pages/UserProfileSettingsPage";
import ManagerHomePage from "./pages/ManagerHomePage";
import UserPermitPage from "./pages/UserPermitPage";
import ManagerEmployeesPage from "./pages/ManagerEmployeesPage";
import PermitRequestPage from "./pages/PermitRequestPage";

function RouterPage() {
  const dispatch = useDispatch<hrDispatch>();
  const location = useLocation();
  const isAdminLogin = hrUseSelector((state) => state.adminAuth.isAdminAuth);
  const isAuth = hrUseSelector((state) => state.auth.isAuth);

  const isManagerLogin = hrUseSelector(
    (state) => state.auth.loginResponse?.position === "MANAGER"
  );
  const position = hrUseSelector((state) => state.auth.loginResponse?.position);
  console.log(position);
  console.log(isManagerLogin);
  const isFirstLogin = hrUseSelector(
    (state) => state.auth.loginResponse?.isFirstLogin
  );
  console.log(isFirstLogin);
  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    if (adminToken) {
      dispatch(adminLogin());
    } else {
      dispatch(adminLogout());
    }
  }, [dispatch]);
  useEffect(() => {
    if (!location.pathname.includes("/admin")) {
      localStorage.removeItem("adminToken");
      dispatch(adminLogout());
    }
  }, [dispatch, location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin"
        element={isAdminLogin ? <AdminHomePage /> : <AdminLoginPage />}
      />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route
        path="/admin/customers"
        element={isAdminLogin ? <AdminCustomersPage /> : <AdminLoginPage />}
      />
      <Route
        path="/admin/wait-customers"
        element={isAdminLogin ? <AdminWaitCustomersPage /> : <AdminLoginPage />}
      />
      <Route
        path="/user-information"
        element={isFirstLogin && isManagerLogin && <UserInformationPage />}
      />
      <Route
        path="/profile"
        element={isAuth ? <UserProfileSettingsPage /> : <LoginPage />}
      />
      <Route
        path="/manager"
        element={
          isManagerLogin && isFirstLogin ? (
            <UserInformationPage />
          ) : isManagerLogin ? (
            <ManagerHomePage />
          ) : isAuth ? (
            <HomePage />
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/manager/permit"
        element={
          isManagerLogin ? (
            <UserPermitPage />
          ) : isAuth ? (
            <HomePage />
          ) : (
            <LoginPage />
          )
        }
      />
      <Route
        path="/manager/employees"
        element={
          isManagerLogin ? (
            <ManagerEmployeesPage />
          ) : isAuth ? (
            <HomePage />
          ) : (
            <LoginPage />
          )
        }
      />

      <Route
        path="/set-new-password"
        element={isAuth ? <SetNewPasswordPage /> : <LoginPage />}
      ></Route>
      <Route
        path="/permit-request"
        element={isAuth ? <PermitRequestPage /> : <LoginPage />}
      >
        {" "}
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <RouterPage />
    </BrowserRouter>
  );
}
