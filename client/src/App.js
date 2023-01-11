import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import Books from './pages/Books'
import Home from './pages/Home'
import Update from './pages/Update'

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/books' element={<Books />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<Add />} />
                    <Route path='/update/:id' element={<Update />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
