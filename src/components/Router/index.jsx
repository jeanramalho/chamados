import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home';



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<h1>Event</h1>} />
    </Routes>
  );
}

export default Router;