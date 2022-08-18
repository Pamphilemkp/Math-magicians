
import {Link } from 'react-router-dom';

function Header () {


return (
    <div className='header-container'>
        <h1 className='title' > Math Magicians</h1>
        <nav className='header-items'>
            <Link to="/" className='link link-1'>Home</Link>
            <Link to="/Quotes" className='link link-1'>Quotes</Link>
            <Link to="/Calculator" className='link'>Calculator</Link>
        </nav>
    </div>
)
}

export default Header;