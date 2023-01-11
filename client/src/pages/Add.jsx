import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        title: '',
        desc: '',
        price: null,
        cover: '',
    })

    const handleChange = (e) => {
        setBook((prev) => { return {...prev, [e.target.name]: e.target.value}})
    }
    const handleOnclick = async () => {
        try {
            const res = await axios.post('http://localhost:8808/books', book)
            navigate('/books')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='form'>
                <h1>Add a new book</h1>
                <input type='text' placeholder='title' name='title' onChange={handleChange} />
                <input type='text' placeholder='desc' name='desc' onChange={handleChange} />
                <input type='number' placeholder='price' name='price' onChange={handleChange} />
                <input type='text' placeholder='cover' name='cover' onChange={handleChange} />
                <button onClick={handleOnclick}>Add the book</button>
            </div>
        </div>
    )
}

export default Add
