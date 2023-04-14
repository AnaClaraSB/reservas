import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
//import logo from './logo.svg';
import './App.css';
import Clientes from './paginas/clientes';
import Funcionarios from './paginas/funcionarios';
import Home from './paginas/home';
import Salas from './componentes/salas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Salasmod from './paginas/modsalas'
import Index from './paginas';
import ListarSalas from './paginas/listarsalas';
import ListarClientes from './paginas/listarclientes';
import Clientesmod from './paginas/modclientes'
import Funcinariosmod from './paginas/modfuncionarios'
import ListarFuncionarios from './paginas/listarfuncionarios';
import Resaervas from './paginas/reservas';
import Reservas from './paginas/reservas';

function App() {
  return (
    
    <Container>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/clientes" element={<Clientes/>} />
          <Route path="/funcionarios" element={<Funcionarios/>} />
          <Route path="/salas" element={<Salas/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/salas/:id" element={<Salasmod/>} />
          <Route path="/listarsalas" element={<ListarSalas/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/clientes/:id" element={<Clientesmod/>} />
          <Route path="/listarclientes" element={<ListarClientes/>} />
          <Route path="/index" element={<Index/>} />
          <Route path="/funcionarios/:id" element={<Funcinariosmod/>} />
          <Route path="/listarfuncionarios" element={<ListarFuncionarios/>} />
          <Route path="/reservas/" element={<Reservas/>} />
          <Route path="/reservas/:id" element={<Reservas/>} />
        </Routes>
      </BrowserRouter>    

    </Container>

  );
}

export default App;
