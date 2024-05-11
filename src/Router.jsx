import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { Taller } from './pages/taller/Taller.jsx'
import { Practica } from './pages/PracticaSupervisada/Practica.jsx';
import { Tecnologia } from './pages/tecnologia/Tecnologia.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/taller' element={<Taller />} />
      <Route path='/practicaSupervisada' element={<Practica />} />
      <Route path='/tecnologia' element={<Tecnologia />} />
    </Routes>
  );
};
