import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home';
import TicketPages from '../../pages/TicketPages';
import CreatePage from '../../pages/CreatePage'



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chamado/:id' element={<TicketPages />} />
        <Route path='/create' element={<CreatePage />} />
    </Routes>
  );
}

export default Router;