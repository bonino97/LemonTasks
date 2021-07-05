import React from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import TaskForm from '../tasks/TaskForm';
import TasksList from '../tasks/TasksList';

const Projects = () => {
  return (
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className='principal-section'>
        <Navbar></Navbar>
        <main>
          <TaskForm></TaskForm>
          <div className='task-container'>
            <TasksList></TasksList>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
