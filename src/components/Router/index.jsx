import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home';
import TicketPages from '../../pages/TicketPages';



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chamado/:id' element={<TicketPages />} />
    </Routes>
  );
}

export default Router;