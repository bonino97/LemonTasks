import React from 'react';

const Task = ({ task }) => {
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
        <button type='button' className='btn btn-secundary'>
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
