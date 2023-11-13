import React from 'react'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/flavrplate.png'
import hw1 from '../../images/passwordgenerator.png'
import hw2 from '../../images/noteTaker.png'
import hw3 from '../../images/textEditor.png'
const projects = [
  {
    id: 1,
    title: 'Project 1: Fancy Minute Chef',
    description: 'Fancy Minute Chef is food recipe search engine that searches the database using up to 5 keywords!',
    githubLink: ' https://github.com/ejoseph10/Fancy-Minute-Chef',
    deployedLink: ' https://ejoseph10.github.io/Fancy-Minute-Chef/',
    imageSrc: project1,
  },
  {
    id: 2,
    title: 'Project 2: Roots Family Tree Application',
    description: 'The Family Tree Application aims to enhance the user experience by providing a comprehensive platform for creating and visualizing family connections. Users can effortlessly manage their family tree, fostering a sense of connection and understanding of their familial relationships',
    githubLink: 'https://github.com/eecmanny/Roots',
    deployedLink: 'https://salty-thicket-14303-db98c73876c5.herokuapp.com/',
    imageSrc: project2,
  },
  {
    id: 3,
    title: 'Project 3: Flavr Recipe Blog',
    description: ' **Flavr Plate**, a MERN (MongoDB, Express.js, React, Node.js) single-page application that brings at-home chefs together to share and discover recipes in a blog-style format. Connect with fellow food enthusiasts, explore diverse cuisines, and unleash your culinary creativity.',
    githubLink: 'https://PENDING',
    deployedLink: 'https://PENDING',
    imageSrc: project3,
  },
  {
    id: 4,
    title: 'Password Generator',
    description: ' This password generator app uses HTML and CSS to randomly generate passwords with special characters, upper and lowercase characters, and a length between 8 and 128 characters. This app aids users in creating a password with complexities for emails, web accounts, etc.',
    githubLink: 'https://github.com/gmtzz/Password-Generator',
    deployedLink: 'https://gmtzz.github.io/Password-Generator/',
    imageSrc: hw1,
  },
  {
    id: 5,
    title: 'NoteTaker ',
    description: ' The purpose of this app is to allow users to track an miscellaneous tasks or lists using the note taker application. This app utilizes express framework and node.js to allow developers to build the app using file and directory paths..',
    githubLink: 'https://github.com/gmtzz/Note-Taker',
    deployedLink: 'https://infinite-reef-00514-ec2bb9027c76.herokuapp.com/notes',
    imageSrc: hw2,
  },
  {
    id: 6,
    title: 'Text Editor',
    description: ' A browser-based text editor using idb package, javascript, and heroku app deployment technologies but also features offline functionality.',
    githubLink: 'https://github.com/gmtzz/Text-Editor',
    deployedLink: 'https://fathomless-brook-57267-efda70d657fc.herokuapp.com/',
    imageSrc: hw3,
  },
  
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