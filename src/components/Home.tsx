import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import EditorWithTitle from './EditorwithTitle';
import { SubTitleDescriptionHtml } from './content/ContentHtml';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import axios from 'axios';

// export const NEXT_API=process.env.NEXT_API

const Home = () => {
  // const navigate = useNavigate()
  // const handleOnClick = () => {
  //   localStorage.removeItem('login')
  //   navigate("/")
  // }
  const [todo, setTodo] = useState<any>()
  useEffect(() => {
    // fetch(`${process.env.REACT_APP_API_PUBLIC}/todos/1`)
    //   .then((res: any) => {console.log(res)})
    axios.get(`${process.env.REACT_APP_API_PUBLIC}/todos/1`).then((res) => setTodo(res.data)
    )
  }, [])

  const schema = z
    .object({
      name: z
        .string({ required_error: 'aa' })
    })

  const { control, handleSubmit } = useForm<any>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })
  const [name, setText] = useState('')
  const onSubmit = (data: any) => {
    console.log(data)
    setText(data.name)
  }

  return (
    <div>
      <Link to='/about'>About</Link>
      <EditorWithTitle name='name' control={control} title='test' />
      <div style={{ marginTop: 200 }}><SubTitleDescriptionHtml textHtml={name} className='font-normal overflow-hidden' /></div>
      <button onClick={handleSubmit(onSubmit)}>Click</button>

      <div>Todo: {todo ? todo.title : ''}</div>
    </div>
  )
}

export default Home
