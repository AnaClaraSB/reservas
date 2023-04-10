import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Image, Modal } from 'react-bootstrap';
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ListaSalas() {

    return (    

        <Container fluid>
          <Row>
            
            <Cabecalho />
            
          </Row>
          <Link>
                <Image
                    src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                    alt="editar"
                    className="rounded-circle"
                    width="30"
                    height="30"         
                    />
        </Link>
        
          <Row>
        <Footer/>
          <Link to="/salas/:id">
          <Button>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4315/4315609.png"
              alt="Incluir"
              className="rounded-circle"
              width="30"
              height="30"
            />
          </Button>
          </Link>
        </Row>    

    </Container>

     );
}

export default ListaSalas;