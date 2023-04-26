import React from "react";
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Cabecalho from "../componentes/cabecalho";
import Footer from "../componentes/footer";
import '../componentes/style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function IndexJS() {
  return (
    <Container fluid>
        <Row >
          <Cabecalho/>
        </Row >
        <Row className="index">

        </Row>
        <Row>
        </Row>

        <Card>
      <Card.Body>
      <Row sm={4}>
      <Col sm={4}>
      <MDBBtn outline color="dark" floating className='me-4 text-reset' href="/listarclientes" role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='dark' fas icon='user-alt'/>
          </MDBBtn>
          <h3>Clientes</h3>
      </Col>
      <Col sm={4}>
      <MDBBtn outline color="dark" floating className='me-4 text-reset' href="/listarsalas" role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='dark' fas icon='hospital'/>
          </MDBBtn>
          <h3>Salas</h3>
      </Col>
      </Row>
      <Row sm={4}>
      <Col sm={4}>
      <MDBBtn outline color="dark" floating className='me-4 text-reset' href="./listarfuncionarios" role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='dark' fas icon="id-card-alt"/>
          </MDBBtn>
          <h3>Funcionários</h3>
          </Col>
      </Row>
      <Row sm={4}>
      <Col sm={4}>
      <MDBBtn outline color="dark" floating className='me-4 text-reset' href="./controlereservas" role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='dark' fas icon="id-card-alt"/>
          </MDBBtn>
          <h3>controlereservas</h3>
      </Col>
      </Row>
      <Button variant="dark" size='lg' type="submit" href='../'>
          VOLTAR
        </Button>
      </Card.Body>
      </Card>
      <Footer/>

    </Container>
  );
}

export default IndexJS;
