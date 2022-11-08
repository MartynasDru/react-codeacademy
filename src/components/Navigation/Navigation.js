import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';

const navigationStyle = {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    padding: 20
}

const darkStyle = {
    backgroundColor: 'black',
    color: 'white'
};

const lightStyle = {
    backgroundColor: 'white',
    color: 'black'
};

export const Navigation = ({ onLogout }) => {
    const { isDark, changeTheme, themeColor } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    }

    const buttonStyle = { backgroundColor: themeColor };

    return (
        <div 
            style={{ 
                ...navigationStyle, 
                ...(isDark ? darkStyle : lightStyle) 
            }}
        >
            {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <button style={buttonStyle} onClick={handleLogout}>Logout</button>
            <button style={buttonStyle} onClick={changeTheme}>Change theme</button>
        </div>
    )
}