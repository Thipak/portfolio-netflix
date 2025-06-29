import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Browse } from './views/Browse';
import { Developer } from './views/Developer';
import { Adventurer } from './views/Adventurer';
import { Stalker } from './views/Stalker';
import { Recruiter } from './views/Recruiter';
import { Experience } from './views/Experience';
import { Projects } from './views/Projects';
import { Skills } from './views/Skills';
import { Contact } from './views/Contact';
import { Blogs } from './views/extras/Blogs';
import { Certificates } from './views/extras/Certificates';
import { Music } from './views/extras/Music';
import { Recommendations } from './views/extras/Recommendations';
import { Home } from './views/Home';

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile">
          <Route index element={<div>Profile Overview</div>} />
          <Route path="recruiter" element={<Recruiter />} />
          <Route path="developer" element={<Developer />} />
          <Route path="stalker" element={<Stalker />} />
          <Route path="adventurer" element={<Adventurer />} />
        </Route>
        <Route path="/work-experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/music" element={<Music />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/certificates" element={<Certificates />} />\
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
