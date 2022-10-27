import { Link } from 'react-router-dom';

export const Navigation = () => {
    const navigationStyle = {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        padding: 20
    }

    return (
        <div style={navigationStyle}>
            {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contacts">Contacts</Link>
        </div>
    )
}