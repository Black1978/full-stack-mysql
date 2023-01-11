import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './books.css'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books, setBooks] = useState([])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8808/books/${id}`)
            console.log(`A book with ${id} has been deleted seccussfully!`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = () => {}

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get('http://localhost:8808/books')
                setBooks(res.data)
            } catch (error) {}
        }
        fetchAllBooks()
    }, [])

    return (
        <div>
            <h1>My books shop</h1>
            <div className='books'>
                {books.map((item) => {
                    return (
                        <div className='book' key={item.id}>
                            {item.cover && <img src={item.cover} />}
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <span>{item.price}</span>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <button>
                                <Link to={`/update/${item.id}`}>Update</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
            <button>
                <Link to='/add'>Add a new book</Link>
            </button>
        </div>
    )
}

export default Books
