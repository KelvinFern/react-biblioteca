import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/cosmo/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import ListarLivros from './views/Livros';
import CadastroLivro from './views/CadastroLivro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/livros' element={<ListarLivros />} /> 
        <Route path='/livros/cadastrar' element={<CadastroLivro />} />
        <Route path='/livros/editar/:id' element={<CadastroLivro />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
