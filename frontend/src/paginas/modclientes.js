import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from '../componentes/cabecalho';
import Footer  from '../componentes/footer';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import '../componentes/style.css';
import vertical from '../vertical.jpg';


function Clientesmod() {
  
  const { id } = useParams();
  const [cliente, setFormData] = useState([]);
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {
        
        console.log('id =' + id);
        const response = await axios.get(`http://localhost:5000/clientes/${id}`);
        setFormData(response.data);      
        console.log('response ' + response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 
  
  return (    

    <Container fluid>

      <Cabecalho/>

      <Card>
      <Card.Body>
      <Row>
      <Col>
        <Form>
        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Cpf:</Form.Label>
          <Col sm={9}>
          <Form.Control type="text" placeholder="" value={cliente.cpf}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Nome:</Form.Label>
          <Col sm={9}>
          <Form.Control type="text" placeholder="Password" value={cliente.nome}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Cep:</Form.Label>
          <Col sm={9}>
          <Form.Control type="text" placeholder="Password" value={cliente.cep}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicCheckbox">
          <Col sm={9}>
          <Form.Check type="checkbox" label/>
          </Col>
        </Form.Group>
      </Form>
      </Col>
      <Col sm={1}>
      <Figure>
          <Figure.Image
            alt="vertical"
            src={vertical}
          />
        </Figure>
      </Col>
      <Col sm={6}>
      <Figure>
          <Figure.Image rounded
            width={500}
            height={200}
            alt="img"
            src={cliente.img}
          />
        </Figure>
      </Col>
      </Row>
      </Card.Body>
      </Card>
      
      <Footer/>

    </Container>
  );
}

export default Clientesmod;