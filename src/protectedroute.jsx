import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('jwtToken'); // Adjust based on your auth logic

    return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
