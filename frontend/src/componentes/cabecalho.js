import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../componentes/style.css';

function Cabecalho() {
  
  return (
    <Navbar bg="light" variant={"light"} expand="lg" className='cabecalho'>
      <Container>
        <a href="index.html" id="logo"><img src="https://cdn-icons-png.flaticon.com/128/2094/2094299.png" alt="logo"/></a>
        <Navbar.Brand href="#home">FEEL FREE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contatos">Contatos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href="/index" id="logo"><img src="https://img.icons8.com/office/1x/radio-tower.png" alt="logo"/></a>
      </Container>
    </Navbar>
       
  );
}

export default Cabecalho;