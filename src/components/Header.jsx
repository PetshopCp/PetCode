import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Produtos from '../pages/Produtos'

const Header = () => {
    return (
        <header className="flex header justify-between = center align-items = center py-6 px-[5%] bg-blue-950">
            <div>

            <h1 className="text-3xl font-bold text-white">PET SHOP</h1>
            </div>
            <div>
            <h3 className="text-lg font-semibold text-white">Produtos</h3>
            
            </div>

            <Link to="/" className="flex items-center gap-2 py-2 rounded-2xl"><Home />Home</Link>
            <Link to="/produtos" className="flex items-center gap-2 py-2 rounded-2xl">Produtos</Link>

        </header>
    )
}

export default Header
