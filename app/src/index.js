import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './pages/Create';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navigation></Navigation>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/api/:id' element={<Edit />}></Route>
    </Routes>
  </Router>
);


