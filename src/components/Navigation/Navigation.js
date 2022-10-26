import { Link } from 'react-router-dom';
import './navigation.css';

export const Navigation = () => {
    return (
        <div className='navigation'>
            {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}