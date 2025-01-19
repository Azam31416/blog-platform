import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import Login from './components/Login';
import Register from './components/Register';


function App(){
  return (
    <Router>
      <div className="container mt-5">
        <h1>Blog Platform</h1>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;