import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, HookForm, RefForm, StandartForm } from 'screens';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="standart" element={<StandartForm />} />
        <Route path="hooks" element={<HookForm />} />
        <Route path="refs" element={<RefForm />} />
      </Routes>
    </div>
  );
}

export default App;
