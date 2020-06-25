import React, { useState, useEffect } from 'react';
import api from './services/api'
import Header from './components/HEader';
import './App.css';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'front-end web']);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response)
    })
  }, [])

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`);
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
    <Header title="Projects"/>
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  )
}

export default App;