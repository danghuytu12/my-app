import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const history = useNavigate()
    const handleOnClick = () => {
        localStorage.setItem('login', true as any)
        history("/")
    }

    useEffect(() => {
        if(localStorage.getItem('login')){
          window.location.reload();
          history("/")
        }
    }, [history])
  
  return (
    <div>
      <button onClick={handleOnClick}>login</button>
    </div>
  )
}

export default Login
