import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
})

app.listen(8808, () => {
    console.log('Connected to backend!')
})
app.get('/', (req, res) => {
    res.json('hi, this is the backend!')
})
app.get('/books', (req, res) => {
    const q = 'SELECT * FROM books'
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json(data)
    })
})
app.post('/books', (req, res) => {
    const q = 'INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)'
    const values = [req.body.title, req.body.desc, req.body.cover, req.body.price]
    db.query(q, [values], (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json(data)
    })
})
app.delete('/books/:id', (req, res) => {
    const q = 'DELETE FROM books WHERE id = ?'
    const bookId = req.params.id
    db.query(q, [bookId], (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json('The book is deleted successfully!')
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const q = 'UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?'
    console.log(req.body)
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover]
    db.query(q, [...values, bookId], (err, data) => {
        if (err) {
            return res.json(err)
        }
        res.json('The book is updated successfully!')
    })
})
