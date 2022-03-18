import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
      <Navbar/>
      <div className='name'>
        <h1>
          <span>Launch Your App </span> <br/>
          With Confidence And Creativity
        </h1>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus quae magni delectus at doloremque nobis non repudiandae nostrum beatae. Placeat omnis culpa fugiat nisi nobis numquam nam itaque earum.</p>
        <a href="#" className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header;