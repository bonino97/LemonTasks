import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  //Obtener proyectos cuando carga el componente.
  useEffect(() => {
    getProjects();
  }, []);

  //Revisar si proyectos tiene contenido
  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno!</p>;

  return (
    <ul className='project-list'>
      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </ul>
  );
};

export default ProjectList;
