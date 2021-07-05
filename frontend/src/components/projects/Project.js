import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
  //Obtener el state del formulario.
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { getTasksById } = tasksContext;

  //Funcion para agregar el proyecto actual
  const selectProject = (project) => {
    actualProject(project);
    getTasksById(project.id); //Filtrar las tareas cuando se de click.
  };

  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => selectProject(project)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
