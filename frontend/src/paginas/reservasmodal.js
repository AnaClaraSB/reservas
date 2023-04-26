import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams,useNavigate } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../componentes/style.css'

function Reservasmodal() {
   
  const { id } = useParams();
  const [Reservas, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        const response = await axios.get(`http://localhost:5000/apireservas/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchFormData();
    },[id]); 

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
          if (id === ":id") {
            
              await axios.post('http://localhost:5000/apireservas',Reservas );
              alert('incluido com sucesso!'); 
          }
          else {
              alert("teste")
              await axios.put(`http://localhost:5000/apireservas/${id}`,Reservas );
              alert('alterado com sucesso!');
          }
        }
      } catch (error) {
        console.error(error);
      }
      history(-1);
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...Reservas, [name]: value });
    };
  
  
  return (    
    <Container fluid >

        <Cabecalho />

      <Row>
      <Col>
        <Form onSubmit={handleSubmit} className='reservasmodal'>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Número:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="cpf" value={Reservas.numero} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicEmail">
          <Form.Label>Sala:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="nome" value={Reservas.sala} onChange={handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Cliente:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="cep" value={Reservas.cliente} onChange={handleChange}/>
          </Col>
        </Form.Group> 

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Data:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.data} onChange={handleChange}/>
          </Col>
        </Form.Group> 

        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Inicio:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="email" value={Reservas.inicio} onChange={handleChange}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Fim:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.fim} onChange={handleChange}/>
          </Col>
        </Form.Group> 
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Valor:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.valor} onChange={handleChange}/>
          </Col>
        </Form.Group>   
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Valor Total:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.valortotal} onChange={handleChange}/>
          </Col>
        </Form.Group>  
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Observação:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.obersevacao} onChange={handleChange}/>
          </Col>
        </Form.Group>  
        <Form.Group as={Row} className="me-2" controlId="formBasicPassword">
          <Form.Label>Status:</Form.Label>
          <Col sm={8}>
          <Form.Control type="text" placeholder="" name="tel" value={Reservas.status} onChange={handleChange}/>
          </Col>
        </Form.Group> 
        
            

        <Form.Group as={Row} className="me-2" controlId="formBasicCheckbox">
    
        <br></br>
        </Form.Group>
        <Button variant="primary" size='lg' type="submit" name="salvar">
          SALVAR
        </Button>
      </Form>
      </Col>

      </Row>

      <Footer/>
    </Container>
  );
}

export default Reservasmodal;