import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isAlphasHighlighted, setIsAlphasHighlighted] = useState(false);
  const [isLoginHighlighted, setIsLoginHighlighted] = useState(false);

  useEffect(() => {
    // Check if the current location matches the 'Alphas' or 'Login' links
    setIsAlphasHighlighted(location.pathname === '/alphas');
    setIsLoginHighlighted(location.pathname === '/');
  }, [location.pathname]);

  const alphaButtonStyle = {
    backgroundColor: isAlphasHighlighted ? 'white' : 'black',
    color: isAlphasHighlighted ? 'black' : 'white',
    // Add any other styles you need here
  };

  const loginButtonStyle = {
    backgroundColor: isLoginHighlighted ? 'white' : 'black',
    color: isLoginHighlighted ? 'black' : 'white',
    // Add any other styles you need here
  };

  return (
    <div className='header-main-container'>
      <div className="left">
        <Link to='/'><h2>Trippo</h2></Link>
      </div>
      <div className="right-container">
        <Link
          className='alpha-button'
          to='/alphas'
          style={alphaButtonStyle}
          onClick={() => {
            setIsAlphasHighlighted(true);
            setIsLoginHighlighted(false);
          }}
        >
          Alphas
        </Link>
        <Link
          className='login-button'
          to='/login'
          style={loginButtonStyle}
          onClick={() => {
            setIsAlphasHighlighted(false);
            setIsLoginHighlighted(true);
          }}
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
