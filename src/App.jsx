import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fontsource/roboto';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0" style={{ width: '100%', height: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
