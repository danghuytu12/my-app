import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import EditorWithTitle from './EditorwithTitle';
import { SubTitleDescriptionHtml } from './content/ContentHtml';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

  const schema = z
  .object({
    name: z
      .string({ required_error: 'aa'})
  })

  const { control, handleSubmit, reset, setValue, setError } = useForm<any>({
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
      <div style={{marginTop: 200}}><SubTitleDescriptionHtml textHtml={name} className='font-normal overflow-hidden' /></div>
      <button onClick={handleSubmit(onSubmit)}>Click</button>
    </div>
  )
}

export default Home
