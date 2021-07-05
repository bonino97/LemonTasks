import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TasksList = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  //Si no hay proyecto seleccionado
  if (!project) return <h2>Selecciona un proyecto</h2>;

  const [actualProject] = project;

  const tasks = [
    {
      name: 'Elegir Plataforma',
      state: true,
    },
    {
      name: 'Elegir Hosting',
      state: true,
    },
    {
      name: 'A guacha pelada',
      state: true,
    },
    {
      name: 'Peruzzi',
      state: false,
    },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className='tasks-list'>
        {tasks.length === 0 ? (
          <li className='task'>No hay tareas!</li>
        ) : (
          tasks.map((task) => {
            return <Task key={task.name} task={task}></Task>;
          })
        )}
      </ul>
      <button
        type='button'
        className='btn btn-remove'
        onClick={() => deleteProject(project.id)}
      >
        {' '}
        Eliminar Projecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
