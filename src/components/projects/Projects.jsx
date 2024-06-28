import React from 'react';
import Project from './Project';
import './projects.css';


const Projects = () => {
  return (
    <section className="work section" id='#portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most Recent Works</span>

        <Project />
    </section>

  )
}

export default Projects