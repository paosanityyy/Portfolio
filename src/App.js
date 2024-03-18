import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview'; // or any other page component
import Projects from './components/Projects'; // or any other page component
import About from './components/About'; // or any other page component
import Contact from './components/Contact'; // or any other page component
import Documentation from './components/Documentation'; // or any other page component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/Portfolio' element={<Overview />} />
          <Route path='/overview' element={<Overview />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/documentation' element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
