import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

