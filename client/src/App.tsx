// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css';
import { ProjectsList } from './features/projects/ProjectsList';

function App() {
  return (
    <>
      <section id="center">
        <ProjectsList />
      </section>
    </>
  );
}

export default App;
