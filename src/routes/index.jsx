import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import ToApp from '../pages/ToApp';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:idApp"
          element={<ToApp />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
