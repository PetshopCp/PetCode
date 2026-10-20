import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Produtos from './pages/Produtos'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router> 
      <div>
        <Header/>
        <div className='min-h-screen bg-gray-100 text-gray-900'>
          <main className="border-4 border-red-500">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
            </Routes>
          </main>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
