import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  })
  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(e.target.value)
  }
  const navigate = useNavigate()
  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='title' name='title' onChange={handleChange}/>
      <input type='text' placeholder='desc' name='desc' onChange={handleChange}/>
      <input type='text' placeholder='cover url' name='cover' onChange={handleChange} />
      
      <button onClick={handleClick}>Add Book Info</button>
    </div>
  )
}
