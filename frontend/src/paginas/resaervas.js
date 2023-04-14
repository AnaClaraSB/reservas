import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../../src/componentes/cabecalho';
import Footer from '../../src/componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentes/style.css';
import ComboSalas from '../componentes/combosalas';
import reservasService from '../services/reservasService';

function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {        
        
        const response = await reservasService.getOneReservas(id);
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
        
        
        if (event.nativeEvent.submitter.name === "salvar") {
          alert(id);
         

          if (id === 'inserir') {
              
              await reservasService.postReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await reservasService.updtReservas(id,reserva);
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
      setFormData({ ...reserva, [name]: value });
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row className='resaervas'>
    
      <Form onSubmit={handleSubmit}>

        <ComboSalas name="sala" value={reserva.sala} onSelect={handleChange}/>
        <Form.Label>Numero:</Form.Label>
        <Form.Control type="text" name="numero" value={reserva.numero} onChange={handleChange}/>
        <Form.Label>Data:</Form.Label>
        <Form.Control type="date" name="data" value={reserva.data} onChange={handleChange}/>
        <Form.Label>Hora inicio:</Form.Label>
        <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
        <Form.Label>Hora fim:</Form.Label>
        <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>          
        <Form.Label>Valor:</Form.Label>
        <Form.Control type="number" name="valor" value={reserva.valor} onChange={handleChange}/>
        <Form.Label>Observação:</Form.Label>
        <Form.Control type="text" name="observacao" value={reserva.observacao} onChange={handleChange}/>          
        
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

export default Reservas;