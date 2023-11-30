import React from 'react'
import './Home.css';
import Diamond from '../../img/sapiens.svg';

const Home = () => {
  return (
    <div className='home-main-container'>
      <div className="text">
        <h2>Always the ride <br /> you want</h2>
      <p>Request a ride, hop in and go.</p>
      </div>
      
      <form action="">
        <input type="text" placeholder='Enter location'/>
        <input type="text"  placeholder='Enter destination'/>
        <button className='hsubmit'>Search</button>
      </form>

      <img src={Diamond} alt="" />
    </div>
  )
}

export default Home