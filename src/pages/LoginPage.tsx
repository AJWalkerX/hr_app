import React from 'react'
import Header from '../components/molecules/Header/Header'
import Login from '../components/molecules/Login/Login'


function LoginPage() {
  return (
    <>
    <div
        className="container d-grid align-items-center"
        style={{ height: "60vh", width: "70%" }}
      >
        <Login />
      </div>
    </>
  )
}

export default LoginPage
