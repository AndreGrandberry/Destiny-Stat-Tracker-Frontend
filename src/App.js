// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './homepage/Homepage'; // Import Homepage component
import Dashboard from './dashboard/Dashboard'; // Import Dashboard component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
