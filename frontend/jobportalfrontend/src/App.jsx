import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Jobs from './components/Jobs';
import Applications from './components/Applications';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        setIsLoggedIn(true);
        
        setRole(userData.role);
        console.log(userData.role);
        
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem('user'); // Remove invalid data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update state
    setRole(null);
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />} />
        
        {isLoggedIn && (
          <Route path="/home" element={<Dashboard ContentComponent={Home} handleLogout={handleLogout} />} />
        )}
        
        {isLoggedIn && role === 'user' && (
          <>
            <Route path="/about" element={<Dashboard ContentComponent={About} handleLogout={handleLogout} />} />
            <Route path="/jobs" element={<Dashboard ContentComponent={Jobs} handleLogout={handleLogout} />} />
            <Route path="/applications" element={<Dashboard ContentComponent={Applications} handleLogout={handleLogout} />} />
          </>
        )}

        {isLoggedIn && role === 'admin' && (
          <>
           <Route path="/about" element={<Dashboard ContentComponent={About} handleLogout={handleLogout} />} />
            <Route path="/admin/home" element={<Dashboard ContentComponent={Home} handleLogout={handleLogout} />} />
          </>
        )}
      </Routes>
   </>
  );
}

export default App;