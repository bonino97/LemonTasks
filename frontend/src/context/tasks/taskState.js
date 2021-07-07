import React, { useReducer } from 'react';

import taskContext from './taskContext';
import taskReducer from './taskReducer';

import {
  TASKS_PROJECT,
  ADD_TASK,
  TASK_VALIDATION,
  DELETE_TASK,
} from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 3,
        name: 'Elegir Hosting',
        state: true,
        projectId: 2,
      },
      {
        id: 4,
        name: 'A guacha pelada',
        state: true,
        projectId: 3,
      },
      {
        id: 5,
        name: 'Peruzzi',
        state: false,
        projectId: 4,
      },
      {
        id: 6,
        name: 'Elegir Plataforma',
        state: true,
        projectId: 4,
      },
      {
        id: 7,
        name: 'Elegir Hosting',
        state: true,
        projectId: 3,
      },
      {
        id: 8,
        name: 'A guacha pelada',
        state: true,
        projectId: 2,
      },
    ],

    tasksProject: null,
    errorTask: false,
  };

  //Dispatch para ejecutar las acciones.
  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Crear las funciones.

  //Obtener las tareas de un proyecto.
  const getTasksByProjectId = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  //Agregar tarea a proyecto seleccionado.
  const addTask = (task) => {
    // task.id = v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  //Valida y muestra un error de ser necesario
  const taskValidation = () => {
    dispatch({
      type: TASK_VALIDATION,
    });
  };

  //Eliminar tarea por id
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        getTasksByProjectId,
        addTask,
        taskValidation,
        deleteTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
