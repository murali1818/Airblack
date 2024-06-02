import React from 'react'
import icon from "./icon/icon.svg"
import tick from "./icon/tick.svg"
import './css/Hero.css';

const Hero = () => {
  return (
    <div className='hero-section'>
      <div class="hero-text">
        <h1 class="hero-title">Professional Online<br></br>Makeup Course</h1>
        <div class="certification">
          <span class="certification-programme">
          <img src={icon} alt="Certification Icon"/>
            Certification Programme</span>
          <span class="rating">⭐ Rated 4.85/5</span>
        </div>
        <ul class="course-features">
          <li><img src={tick} alt="tick Icon"/>India's No.1 Online Makeup Course</li>
          <li><img src={tick} alt="tick Icon"/>Learn by LIVE Do-it-Together Classes</li>
          <li><img src={tick} alt="tick Icon"/>Unlimited Practise Session to master skills</li>
        </ul>
      </div>
      <div class="hero-form">
        <div class="form-header">FILL THE FORM BELOW TO ENQUIRE</div>
        <form>
          <label>*Enter your name
            <input type="text" placeholder="Eg. Aneesha Mehra" />
          </label>
          <label>*Enter your WhatsApp Number
            <div class="whatsapp-input">
              <select>
                <option>+91</option>
              </select>
              <input type="text" placeholder="Eg. 0000000000" />
            </div>
          </label>
          <label>*Select your profession
            <select>
              <option>Choose the most relevant option</option>

            </select>
          </label>
          <label>*Select your goal
            <select>
              <option>Choose the most relevant option</option>

            </select>
          </label>
          <label>*Select your city
            <select>
              <option>Choose the most relevant option</option>

            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
