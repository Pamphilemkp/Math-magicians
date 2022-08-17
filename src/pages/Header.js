
import {Link }from 'react-router-dom';

function Header () {
return (
    <div>
        <h1>Math Magicians</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Quotes">Quotes</Link>
            <Link to="/Calculator">Calculator</Link>
        </nav>
    </div>
)
}

export default Header;