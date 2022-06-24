import './Style/App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import Details from './Pages/Details';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>   
  );
}

export default App;
