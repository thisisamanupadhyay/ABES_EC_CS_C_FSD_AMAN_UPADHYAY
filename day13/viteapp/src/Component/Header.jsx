import {Link} from 'react-router-dom'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <nav className="nav-items">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </nav>
        </div>
    )
}

export default Header