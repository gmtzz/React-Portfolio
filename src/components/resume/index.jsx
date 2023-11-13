import React from 'react'
import "./resume.css"
import resume from "../../images/GiselleMartinezResume.png"
const Resume = () => {
  const resumeURL = resume //add resume pdf to images folder
  return (
    <div>
      <h2>My Resume</h2>
      <p>Click the link below to download my resume:</p>
      <a href={resumeURL} download="GiselleMartinezResume.png"> 
        Download Resume
      </a>
      <iframe
        src={resumeURL}
        title="Resume"
        width="100%"
        height="500px"
        style={{ border: '1px solid #ccc' }}
      />
    </div>
  )
}

export default Resume