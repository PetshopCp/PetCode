import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Header = () => {
    return (
        <header className="flex header justify-between = center align-items = center py-6 px-[5%] bg-blue-950">
            <div>

            <h1 className="text-3xl font-bold text-white">PET SHOP</h1>
            </div>

            <span className='flex gap-4'>
                <Link to="/" className="text-lg font-semibold text-white">Home</Link>
                <Link to="/produtos" className="text-lg font-semibold text-white">Produtos</Link>
            </span>

        </header>
    )
}

export default Header
