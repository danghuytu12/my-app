import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
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
