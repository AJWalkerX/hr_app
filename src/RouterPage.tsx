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
import PersonelHomePage from "./pages/PersonelHomePage";
import PermitRequestManagerPage from "./pages/PermitRequestPageManager";
import ManagerProfileSettingsPage from "./pages/ManagerProfileSettingsPage";
import UserPermitViewPage from "./pages/UserPermitViewPage";
import ManagerPermitView from "./pages/ManagerPermitViewPage";
import ManagerPermitViewPage from "./pages/ManagerPermitViewPage";
import ManagerCommentPage from "./pages/ManagerCommentPage";

import AddSpendingPage from "./pages/AddSpendingPage";
import PersonalViewYourPermitPage from "./pages/PersonalViewYourPermitPage";
import CommentListPage from "./pages/CommentListPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import PersonalViewAllMySpendingPage from "./pages/PersonalViewAllMySpendingPage";
import CommentDetailsPage from "./pages/CommentDetailsPage";
import ManagerSpendingViewPage from "./pages/ManagerSpendingViewPage";

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
      <Route path="/user-information" element={<UserInformationPage />} />
      <Route path="/personal/profile" element={<UserProfileSettingsPage />} />
      <Route path="/manager" element={<ManagerHomePage />} />
      <Route path="/manager/permit" element={<UserPermitPage />} />
      <Route path="/manager/employees" element={<ManagerEmployeesPage />} />

      <Route path="/set-new-password" element={<SetNewPasswordPage />}></Route>
      <Route path="/personal/permit-request" element={<PermitRequestPage/>}> </Route>
      <Route path="/personal" element={<PersonelHomePage/>}></Route>
      <Route path="/manager/permit-request" element={<PermitRequestManagerPage/>}> </Route>
      <Route path="/manager/profile" element={<ManagerProfileSettingsPage/>} />
      <Route path="/personal/view-your-permit" element={<PersonalViewYourPermitPage/>}></Route>
      <Route path="/manager/view-manager-permit" element={<ManagerPermitViewPage/>}></Route>
      <Route path="/manager/comment" element={<ManagerCommentPage/>}></Route>
      <Route path="/comment/list" element={<CommentListPage />} />
      <Route path="/personal/add-spending" element={<AddSpendingPage/>}></Route>
      <Route path="/employee-details" element={<EmployeeDetailsPage/>}></Route>
      <Route path="/personal/view-my-spending" element={<PersonalViewAllMySpendingPage/>}></Route>
      <Route path="/comment/list/comment-details" element={<CommentDetailsPage/>}></Route>
      <Route path="/manager/employees/spending-list" element={<ManagerSpendingViewPage/>}></Route>
      <Route path="/comment/list/comment-details/:commentId" element={<CommentDetailsPage/>}></Route>
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
