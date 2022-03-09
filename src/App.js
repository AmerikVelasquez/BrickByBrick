import Signup from './components/Signup';
import React from "react";
import AuthProvider from './AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './components/Start';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
     <Router>
       <AuthProvider>
       <Routes>
         <Route path="/" element={<Start />} />
         <Route path = "/signup" element={<Signup />} />
         <Route path = "/login" element ={<Login />} />
         <Route path = "/dashboard" element ={<Dashboard />} />
       </Routes>
       </AuthProvider>
     </Router>
     </>
  );
}

export default App;
