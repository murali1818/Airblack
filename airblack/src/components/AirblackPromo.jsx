import React from 'react';
import './css/Promo.css';
import { FaVideo, FaStar, FaUsers } from 'react-icons/fa';
import left from "./icon/left.svg"
import right from "./icon/right.svg"

const AirblackPromo = () => {
  return (
    <div className="container">
        <div className="header">
        <img src={left} alt='left icon'/>
        <p> Why Should You<br></br> Join Airblack?</p>
        <img src={right} alt='right icon'/>
      </div>
        
         <div className="features">

        <div className="feature"> 
          <FaVideo className="feature-icon" />
          <div className="feature-text">Do-it-together<br></br>live on zoom</div>
        </div>

        <div className="feature">
          <FaStar className="feature-icon" />
          <div className="feature-text">4.8 /5 <br></br>Rated Classes</div>
        </div>
        
        <div className="feature">
          <FaUsers className="feature-icon" />
          <div className="feature-text">35000+<br></br> Members</div>
        </div>
      </div>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default AirblackPromo;
