import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Root = () => (
  
  <Router >
    <Routes>
      <Route path='/' element={ <App/> }/>
      <Route path='/Login' element={ <Login/> }/>
      <Route path='/Register' element={ <Register/> }/>
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

