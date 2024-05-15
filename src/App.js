import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Nav routes={['/', '/dashboard', '/about']} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

