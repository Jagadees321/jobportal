import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure you create this CSS file

const Navbar = () => {
  return (
    <div className='navbar' style={{height:'15vh'}}>
      <div className='logo'>
        <h2>JobPortal</h2>
      </div>
      <nav style={{marginLeft:'-200px'}}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/applications">Application History</Link>
        <Link to="/logout" style={{marginLeft:'-10px'}}>Logout</Link>
      </nav>
    </div>
  );
};

export default Navbar;
