import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Project = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, i)=>{
    setItem({name: e.target.textContent.toLowerCase()})
    setActive(i);
  }
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? 'active-work' : ''} work__item`}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <ProjectItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Project;
