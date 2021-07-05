import React from 'react';
const Navbar = () => {
  return (
    <header className='app-header'>
      <p className='username'>
        Hola <span>Juan Cruz</span>
      </p>

      <nav className='principal-nav'>
        <a href='#'>Cerrar Sesion</a>
      </nav>
    </header>
  );
};

export default Navbar;
