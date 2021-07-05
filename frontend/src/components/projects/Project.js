import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

  //Obtener el state del formulario.
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => actualProject(project)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
