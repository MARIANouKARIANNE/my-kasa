import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogementDetails from './components/LogementDetails'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';
import APropos from './pages/APropos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<LogementDetails />} /> 
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer /> 
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
