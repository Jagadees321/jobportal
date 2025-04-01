import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom'
import './App.css'
import Home from './components/home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data
    setIsLoggedIn(false); // Update state
  };

  return (
    <>
     
        <Routes>
          <Route>
          <Route path="/" element={isLoggedIn ? <Navigate to="/main" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        {/* <Route path="/main" element={isLoggedIn ? <MainPage /> : <Navigate to="/" />} /> */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/main" element={<Dashboard ContentComponent={Home} handleLogout={handleLogout} />} />
          </Route>
        </Routes>
     
    </>
  )
}

export default App
