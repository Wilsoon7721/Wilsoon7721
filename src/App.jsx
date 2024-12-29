import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fontsource/roboto';
import { useContext } from 'react';
import { DarkModeContext } from './ctx/DarkModeContext';

function App() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <Router>
      <button className="themeSetter">
        <img src='/dark_mode.svg' />
      </button>
      <div className="container-fluid p-0" style={{ width: '100%', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
