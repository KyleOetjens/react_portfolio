import React from 'react'
import Me from '../assets/images/headimg.JPG'

export default function Project() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={Me} alt='Image'></img>
      <p>
        Hello! My name is Kyle Oetjens. I am interested in starting a new carrer as a software developer.  When I am not learning to code, I enjoy being outside, hiking with my wife and dog and playing as many sports as I can.
        I am currenty a business analyst for a large CPG company and I am working to gain new skils that would allow me to enter the world of software development.  Take a look at what I have made so far!
      </p>
    </div>
  );
}