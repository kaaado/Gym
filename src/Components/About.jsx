import React from 'react';
import abouti from '../images/about.png';

export default function About() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={abouti} alt="about" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium quasi consequuntur ea illo quidem veniam molestias commodi eaque quia?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}
