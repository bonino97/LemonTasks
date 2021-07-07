import React, { Fragment, useContext } from 'react';
import Task from './Task';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TasksList = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  //Si no hay proyecto seleccionado
  if (!project) return <h2>Selecciona un proyecto</h2>;

  const [actualProject] = project;
  console.log(tasksProject);

  return (
    <Fragment>
      <h2>Proyecto: {actualProject.name}</h2>
      <ul className='tasks-list'>
        {tasksProject.length === 0 ? (
          <li className='task empty-task'>No hay tareas!</li>
        ) : (
          <TransitionGroup>
            {tasksProject.map((task) => {
              return (
                <CSSTransition key={task.id} timeout={200} classNames='task'>
                  <Task task={task}></Task>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        )}
      </ul>
      <button
        type='button'
        className='btn btn-remove'
        onClick={() => deleteProject(actualProject.id)}
      >
        {' '}
        Eliminar Projecto &times;
      </button>
    </Fragment>
  );
};

export default TasksList;
