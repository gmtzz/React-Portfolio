import React from 'react'
import "./about.css"
import profilePic from "../../images/propic.jpg"

const About = () => {
  return (
    <div className='aboutContainer'>
       <div class="about-me">
    <div class="left-column">
        
        <h2>About Me</h2>
        <div className='imageWrapper'>
          <img src={profilePic}/>
        </div>
    </div>
    <div class="right-column">
        <p>
            I worked in the healthcare industry for five years while pursuing a communications degree. I started exploring the world of IT in my senior year of college. After I graduated with my communications degree, I found myself curious to learn more about cybersecurity and programming. I started actively looking for IT roles that would 
            give me any experience and exposure. Since 2020 I have been exploring the paths of the technology industry (cybersecurity, networking, programming).
        </p>
    </div>
</div>
</div>
  )
}

export default About