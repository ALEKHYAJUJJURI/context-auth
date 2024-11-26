import logo from './logo.svg';
import './App.css';
import Login from './compo/Login';

import { BrowserRouter as Router, Route, Routes, Us, Navigate } from 'react-router-dom';
import { Home } from './compo/home';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
