import React, { useReducer } from 'react';
import { v4 } from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  FORM_VALIDATION,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: 'Tienda Virtual' },
    { id: 2, name: 'Marketplace' },
    { id: 3, name: 'Ni idea' },
    { id: 4, name: 'MERN' },
  ];

  const initialState = {
    form: false,
    projects: [],
    errorForm: false,
    project: null,
  };

  //Dispatch para ejecutar las acciones.
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Serie de funciones para el CRUD de proyectos.
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = v4();
    //Insertar proyecto en el state.
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  // Selecciona el proyecto que el usuario dio click.
  const actualProject = (project) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: project,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorForm: state.errorForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
