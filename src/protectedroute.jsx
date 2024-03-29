import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('jwtToken'); 

    return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
