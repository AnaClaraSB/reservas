import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clientes() {
  
  const { id } = useParams();
  const [cliente, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        const response = await axios.get(`http://localhost:5000/enctclientes/${id}`);
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
          if (id.length === 0) {
              await axios.post('http://localhost:5000/clientes/',cliente );
              alert('incluido com sucesso!'); 
          }
          else {
              await axios.put(`http://localhost:5000/enctclientes/${id}`,cliente );
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
      setFormData({ ...cliente, [name]: value });
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>
          <Form.Label>Cpf:</Form.Label>
          <Form.Control type="text" name="cpf" value={cliente.numero} onChange={handleChange}/>
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" name="nome" value={cliente.capacidade} onChange={handleChange}/>
          <Form.Label>cep:</Form.Label>
          <Form.Control type="text" name="cep" value={cliente.valor} onChange={handleChange}/>
          
          <Button variant="primary" type="submit" name="salvar">
            Salvar
          </Button>
          <Button variant="primary" type="submit" name="cancelar">
            Cancelar
          </Button>
        </Form>
      </Row>        
      
        <Row>
          <Footer/>
        </Row>    

    </Container>
  );
}

export default Clientes;