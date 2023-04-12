import React from 'react'
import Test from '../components/Test'
import { Outlet, Navigate } from "react-router-dom";
import Home from '../components/Home';

const Private = () => {
    const test = localStorage.getItem('login')
  return (
    <div>
      {test ? <Home/> : <Navigate to={"/login"}/>}
    </div>
  )
}

export default Private
