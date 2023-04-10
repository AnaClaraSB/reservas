import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Funcionarios() {
  
  const { id } = useParams();
  const [funcionario, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        const response = await axios.get(`http://localhost:5000/enctfuncionarios/${id}`);
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
              await axios.post('http://localhost:5000/funcionarios/',funcionario );
              alert('incluido com sucesso!'); 
          }
          else {
              await axios.put(`http://localhost:5000/enctfuncionarios/${id}`,funcionario );
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
      setFormData({ ...funcionario, [name]: value });
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row>
      
        <Form onSubmit={handleSubmit}>
          <Form.Label>Cpf:</Form.Label>
          <Form.Control type="text" name="cpf" value={funcionario.cpf} onChange={handleChange}/>
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" name="nome" value={funcionario.nome} onChange={handleChange}/>
          <Form.Label>Cep:</Form.Label>
          <Form.Control type="text" name="valor" value={funcionario.cep} onChange={handleChange}/>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" name="descricao" value={funcionario.email} onChange={handleChange}/>
          <Form.Label>Fone:</Form.Label>
          <Form.Control type="text" name="descricao" value={funcionario.fone} onChange={handleChange}/>
          <Form.Label>Funcao:</Form.Label>
          <Form.Control type="text" name="descricao" value={funcionario.funcao} onChange={handleChange}/>

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

export default Funcionarios;