import React from 'react';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login-main-container'>
      <div className="login-hero">
        <h2>Log in to Trippo</h2>
        <button className='google'><FaGoogle className='icon'/>Continue with Google</button>
        <p className='or'>or</p>
        <form action="">
          <input type="text" placeholder='RVCE ID'/>
          <input type="password" placeholder='Password'/>
          <input type="submit" value="Login" className='submit'/>
        </form>
        <p className='terms'>By logging in you agree with our <a href="">Terms of Service</a> <a href="">Privacy Policy</a>, and our default <a href="">Notification Settings</a> </p>
        <span>Don't have an account? <Link to='/signup'>Sign up</Link></span>
      </div>
    </div>
  )
}

export default Login