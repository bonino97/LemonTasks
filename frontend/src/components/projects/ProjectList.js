import React, { useContext, useEffect, useRef } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  const nodeRef = useRef(null);

  //Obtener proyectos cuando carga el componente.
  useEffect(() => {
    getProjects();
  }, []);

  //Revisar si proyectos tiene contenido
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno!</p>;

  return (
    <ul className='project-list'>
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition
            
            key={project.id}
            timeout={200}
            classNames='project'
          >
            <Project project={project}></Project>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
