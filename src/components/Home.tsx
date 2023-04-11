import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
    const handleOnClick = () => {
        localStorage.setItem('login', true as any)
    }
  return (
    <div>
      <Link to='/about'>About</Link>
      <button onClick={handleOnClick}>CLick</button>
    </div>
  )
}

export default Home
