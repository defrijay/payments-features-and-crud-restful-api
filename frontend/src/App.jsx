import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payments from './components/Payments';
import Success from './components/Success';
import Cancel from './components/Cancel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Payments />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
};

export default App;
