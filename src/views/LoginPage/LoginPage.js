import { useNavigate } from "react-router";

export const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        onLogin();
        navigate('/');
    };

    return (
        <div>
            Login form
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}