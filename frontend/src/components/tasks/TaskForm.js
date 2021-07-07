import React, { useContext, useState } from 'react';

import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TaskForm = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { errorTask, addTask, taskValidation, getTasksByProjectId } =
    tasksContext;

  //State del formulario
  const [task, setTask] = useState({
    name: '',
  });
  //Extraer el nombre de la tarea.
  const { name } = task;

  if (!project) return null;

  const [actualProject] = project;

  // Leer los valores del formulario

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Pasar la validacion
    if (name.trim() === '') return taskValidation();

    //Agregar la nueva tarea al state de tarea
    setTaskValues();
    addTask(task);

    //Obtener y filtrar las tareas del proyecto actual
    getTasksByProjectId(actualProject.id);

    //Reiniciar el form.
    setTask({
      name: '',
    });
  };

  const setTaskValues = () => {
    task.projectId = actualProject.id;
    task.status = false;
  };

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
        <div className='input-container'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre tarea'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='input-container'>
          <input
            type='submit'
            className='btn btn-primary btn-submit btn-block'
            value='Agregar tarea'
          />
        </div>
      </form>
      {errorTask ? (
        <p className='message error'>El nombre de la tarea es obligatorio!</p>
      ) : null}
    </div>
  );
};

export default TaskForm;
