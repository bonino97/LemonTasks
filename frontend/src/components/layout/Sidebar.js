import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Lemon<span>Tasks</span>
      </h1>
      <NewProject></NewProject>
      <div className='projects'>
        <h2>Tus proyectos</h2>
        <ProjectList></ProjectList>
      </div>
    </aside>
  );
};

export default Sidebar;
