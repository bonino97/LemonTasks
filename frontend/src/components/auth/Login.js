import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // State para iniciar sesion.
  const [user, addUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

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
        <h1>Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
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
            <input
              type='submit'
              className='btn btn-primary btn-block'
              value='Login'
            />
          </div>
        </form>

        <Link to={'new-account'} className='account-link'>
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
