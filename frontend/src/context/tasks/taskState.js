import React, { useReducer } from 'react';

import taskContext from './taskContext';
import taskReducer from './taskReducer';

import { TASKS_PROJECT } from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      {
        name: 'Elegir Hosting',
        state: true,
        projectId: 2,
      },
      {
        name: 'A guacha pelada',
        state: true,
        projectId: 3,
      },
      {
        name: 'Peruzzi',
        state: false,
        projectId: 4,
      },
      {
        name: 'Elegir Plataforma',
        state: true,
        projectId: 4,
      },
      {
        name: 'Elegir Hosting',
        state: true,
        projectId: 3,
      },
      {
        name: 'A guacha pelada',
        state: true,
        projectId: 2,
      },
    ],

    tasksProject: null,
  };

  //Dispatch para ejecutar las acciones.
  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Crear las funciones.

  //Obtener las tareas de un proyecto.
  const getTasksById = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        getTasksById,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
