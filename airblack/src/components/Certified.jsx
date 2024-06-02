import React from 'react';
import './css/Certified.css';
import left from "./icon/left.svg";
import right from "./icon/right.svg";

const Certified = () => {
  return (
    <div className='certified'>
      <div className="headers">
        <img src={left} alt='left icon' />
        <p> Get Certified From<br/>
          India’s Biggest<br/>
          Beauty Platform</p>
        <img src={right} alt='right icon' />
      </div>
      <div className='certified-img'>
        <img src={'./images/image.png'} alt='certified' />
      </div>
    </div>
  );
}

export default Certified;
