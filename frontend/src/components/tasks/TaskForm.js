import React, { useContext, Fragment } from 'react';
import projectContext from '../../context/projects/projectContext';
const TaskForm = () => {
  //Extraer proyectos desde state inicial
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  if (!project) return null;
  
  const [actualProject] = project;

  return (
    <div className='form'>
      <form>
        <div className='input-container'>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre tarea'
            name='name'
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
    </div>
  );
};

export default TaskForm;
