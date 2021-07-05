import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
  // State para iniciar sesion.
  const [user, addUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    addUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios.

    // Pasarlo al action.
  };

  return (
    <div className='form-user'>
      <div className='container-form dark-shadow'>
        <h1>Crear nueva cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className='field-form'>
            <label htmlFor='name'>Nombre</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Nombre'
              value={name}
              onChange={onChange}
            />
          </div>
          <div className='field-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='field-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='field-form'>
            <label htmlFor='confirm'>Confirmar Password</label>
            <input
              type='password'
              id='confirm'
              name='confirm'
              placeholder='Repite tu Password'
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div className='field-form'>
            <input
              type='submit'
              className='btn btn-primary btn-block'
              value='Crear Cuenta'
            />
          </div>
        </form>

        <Link to={''} className='account-link'>
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
