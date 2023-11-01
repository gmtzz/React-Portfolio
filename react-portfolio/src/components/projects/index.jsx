import React from 'react'
const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    githubLink: 'https://github.com/yourusername/project1',
    deployedLink: 'https://yourproject1url.com',
    imageSrc: 'project1-image.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    githubLink: 'https://github.com/yourusername/project2',
    deployedLink: 'https://yourproject2url.com',
    imageSrc: 'project2-image.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of Project 3',
    githubLink: 'https://github.com/yourusername/project3',
    deployedLink: 'https://yourproject3url.com',
    imageSrc: 'project3-image.jpg',
  },
  //add 3 more cards with hw^^
  // Add more projects with similar structure
];
import "./projects.css"

const ProjectCard = ({title,description,githubLink,deployedLink,imageSrc}) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Deployed App
      </a>
    </div>
  )
}
function Projects() {
  return (
    <div className="project-gallery">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Projects