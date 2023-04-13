import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../context/Provider';

export const About = () => {
  const { todos }: any = useContext(Context);
  console.log(todos)
  return (
    <div>
      <Link to='/'>Avout</Link>
    </div>
  )
}
