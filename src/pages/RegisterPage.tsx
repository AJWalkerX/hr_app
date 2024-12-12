import React from 'react'
import Header from '../components/molecules/Header/Header'
import Register from '../components/molecules/Register/Register'

function RegisterPage() {
  return (
    <>
    <Header/>
    <div
    className="container d-grid align-items-center"
    style={{ height: "60vh", width: "75%" }}
    >
    <Register/>
    </div>

    </>
  )
}

export default RegisterPage
