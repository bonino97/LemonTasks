import React, { useContext } from 'react';

import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasksByProjectId } = tasksContext;

  if (!project)
    return <p className='message error'>No existe un proyecto actualmente.</p>;

  const [actualProject] = project;

  //Funcion que se ejecuta, cuando el usuario elimina tarea.
  const onDeleteTask = (taskId) => {
    deleteTask(taskId);
    getTasksByProjectId(actualProject.id);
  };
  return (
    <li className='task shadow'>
      <p>{task.name}</p>
      <div className='state'>
        {task.state === true ? (
          <button type='button' className='complete'>
            Completo
          </button>
        ) : (
          <button type='button' className='incomplete'>
            Incompleto
          </button>
        )}
      </div>
      <div className='actions'>
        <button type='button' className='btn btn-primary'>
          Editar
        </button>
        <button
          type='button'
          className='btn btn-secundary'
          onClick={() => onDeleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
