import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

export const NEXT_API=process.env.NEXT_API

const Home = () => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    localStorage.removeItem('login')
    navigate("/")
  }
  useEffect(() => {
    fetch(`${process.env.NEXT_API}/todos/1`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])
  return (
    <div>
      <Link to='/about'>About</Link>
      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}

export default Home
