import Homepage from './components/Homepage.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import { Nav } from 'react-bootstrap';
import { Link, Routes, Route,useLocation } from 'react-router-dom';
import './styles/App.css';
import { useState,useEffect } from 'react';

function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0); 
  
  useEffect(()=>{
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActiveTab(1);
    } else if (currentPath === "/resume") {
      setActiveTab(2);
    } else if (currentPath === "/projects") {
      setActiveTab(3);
    }
  }, [location]);

  return (
    <>
      <div className="tabs-container">
        <div className="tabs-name-container">
          <h3 className="tabs-name">Hay</h3>
          <h3 className="tabs-name-2">den</h3>
        </div>
        <Nav variant="tabs" className="nav-tabs">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              className="tab"
              active={activeTab === 1} 
              onClick={() => setActiveTab(1)} 
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              className="tab"
              active={activeTab === 2}
              onClick={() => setActiveTab(2)} 
            >
              Resume
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/projects"
              className="tab"
              active={activeTab === 3} 
              onClick={() => setActiveTab(3)} 
            >
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </>
  );
}

export default App;
