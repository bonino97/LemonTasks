import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {
  //Obtener el state del formulario.
  const projectsContext = useContext(projectContext);
  const { form, errorForm, showForm, addProject, showError } = projectsContext;

  const [project, setProject] = useState({
    name: '',
  });

  const { name } = project;

  // Lee contenido del input.
  const onChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
    // Validar el proyecto.
    if (name === '') {
      showError();
      return;
    }
    // Agregar al State.
    addProject(project);

    // Reiniciar el input.
    setProject({
      name: '',
    });
  };

  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-block btn-primary'
        onClick={showForm}
      >
        Nuevo Proyecto
      </button>
      {form ? (
        <form className='new-project-form' onSubmit={onSubmitProject}>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre proyecto'
            name='name'
            value={name}
            onChange={onChangeProject}
          />
          <input
            type='submit'
            className='btn btn-primary btn-block'
            value='Agregar Proyecto'
          />
        </form>
      ) : null}
      {errorForm ? (
        <p className='message error'>El nombre del proyecto es obligatorio.</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
