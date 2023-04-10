import React from "react";
import { Container, Row } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Cabecalho from "../componentes/cabecalho";
import Footer from "../componentes/footer";
import '../componentes/style.css';


function IndexJS() {
  return (
    <Container fluid>
        <Row >
          <Cabecalho/>
        </Row >
        <Row className="index">
          <Link to="/listarsalas">
            Salas
          </Link>
          <Link to="/listarclientes">
            clientes
          </Link>
          <Link to="/listarfuncionarios">
            <Link to="/listarfuncionarios">
            funcionarios
          </Link>
          </Link>
        </Row>
        <Row>
          <Footer/>
        </Row>
    
    </Container>
  );
}

export default IndexJS;
