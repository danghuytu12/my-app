import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        localStorage.setItem('login', true as any)
    }
  return (
    <div>
      <button onClick={handleOnClick}>login</button>
    </div>
  )
}

export default Login
