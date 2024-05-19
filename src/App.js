import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex flex-col min-h-screen text-slate-300">
      <Router>
        <Navbar />
        <div className="flex-grow max-w-5xl mx-auto"> 
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/about' element={<About />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
