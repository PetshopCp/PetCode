import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100 text-gray-900'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<Produtos />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
