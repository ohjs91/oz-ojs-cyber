import { useState } from 'react';
import './App.css';
import Layout from './common/Layout';
import Home from './pages/Home';
import { Routes, Route } from 'react-router';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
