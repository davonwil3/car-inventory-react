import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './singnin';
import Signup from './signup';
import Dashboard from './dashboard';
import ProtectedRoute from './protectedroute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
              path="/dashboard" 
              element={
                  <ProtectedRoute>
                      <Dashboard />
                  </ProtectedRoute>
              } 
          />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>

);


