import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure this CSS file exists

const Navbar = () => {
  const storedUser = JSON.parse(localStorage.getItem('user')) || {}; // Parse and handle null case

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
  };

  return (
    <div className='navbar' style={{ height: '15vh' }}>
      <div className='logo'>
        <h2>JobPortal</h2>
      </div>
      <nav style={{ marginLeft: '-200px' }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>

        {/* Show Admin Jobs Page for Admins, Jobs Page for Users */}
        {storedUser.role === "admin" ? (
          <>
          <Link to="/adminjobs">Admin Jobs</Link>
          
          </>
        ) : (
         <>
          <Link to="/jobs">Jobs</Link>
          <Link to="/at">applications</Link>
         </>
        )}

       
        <Link to="/login" onClick={handleLogout} style={{ marginLeft: '-10px' }}>
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
