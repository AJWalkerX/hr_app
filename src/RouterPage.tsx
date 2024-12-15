import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminCustomersPage from './pages/AdminCustomersPage';
import AdminWaitCustomersPage from './pages/AdminWaitCustomersPage';




function RouterPage() {
  return (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/register" element={<RegisterPage/>}> </Route>
            <Route path="/admin-login" element={<AdminLoginPage/>}> </Route>
            <Route path="/admin" element={<AdminHomePage/>}> </Route>
            <Route path="/admin/customers" element={<AdminCustomersPage/>}> </Route>
            <Route path="/admin/wait-customers" element={<AdminWaitCustomersPage/>}> </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage;
