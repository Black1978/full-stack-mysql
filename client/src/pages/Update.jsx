import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import './update.css'

function Update() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname.split('/')[2])
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
            const res = await axios.put(`http://localhost:8808/books/${location.pathname.split('/')[2]}`, book)
            console.log(res)
            navigate('/books')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='form'>
                <h1>Update the book</h1>
                <input type='text' placeholder='title' name='title' onChange={handleChange} />
                <input type='text' placeholder='desc' name='desc' onChange={handleChange} />
                <input type='number' placeholder='price' name='price' onChange={handleChange} />
                <input type='text' placeholder='cover' name='cover' onChange={handleChange} />
                <button onClick={handleOnclick}>Update the book</button>
            </div>
        </div>
    )
}

export default Update
