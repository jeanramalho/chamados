import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home';
import TicketPages from '../../pages/TicketPages';
import CreatePage from '../../pages/CreatePage'
import EditPage from '../../pages/EditPage';



function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chamado/:id' element={<TicketPages />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/chamado/:id/edit' element={<EditPage />} />
    </Routes>
  );
}

export default Router;