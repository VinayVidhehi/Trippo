import React from 'react'
import './Signup.css';
import { FaGoogle } from "react-icons/fa";
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='login-main-container'>
      <div className="login-hero">
        <h2>Sign up to Trippo</h2>
        <button className='google'><FaGoogle className='icon'/>Sign up with Google</button>
        <p className='or'>or</p>
        <form action="">
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='RVEC ID'/>
          <input type="password" placeholder='Password'/>
          <input type="submit" value="Sign up" className='submit'/>
        </form>
        <p className='terms'>By creating an account you agree with our <a href="">Terms of Service</a> <a href="">Privacy Policy</a>, and our default <a href="">Notification Settings</a> </p>
        <span>Already have an account? <Link to='/login'>Sign in</Link></span>
      </div>
    </div>
  )
}

export default Signup