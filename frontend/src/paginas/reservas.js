import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Col, Image } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import reservasService from '../services/reservasService';
import '../componentes/style.css';
import ComboSalas from '../componentes/combosalas';
import { Link } from 'react-router-dom';

function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  const [selectedValue, setSelectedValue] = useState('');

  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {

        

        if (id !== 'inserir') {
        const response = await reservasService.getOneReservas(id);
        setFormData(response.data);
        }

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
          alert('teste');
          reserva.funcionario = 'WEB - Internet';
          reserva.cliente = 'Internet - WWW';
          reserva.status = 'R'; // indicar sala reservada
          alert(id);
          alert(reserva.sala);
          reserva.valortotal = 1;
          
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

    const handleSelectChange = (value) => {
      setSelectedValue(value);      
      reserva.sala = value;
    };    
    
  return (    

    <Container fluid>
    <Row>
      <Cabecalho />
    </Row>
   
    <Row className='listarsalas'>
    
    <Form className='horadata' onSubmit={handleSubmit}>
              <Form.Label>Cpf:<Form.Control type="number" name="data" value={reserva.data} onChange={handleChange}/></Form.Label>
          <Form.Label>nome:<Form.Control type="text" name="inicio" value={reserva.inicio} onChange={handleChange}/></Form.Label>
          
              <Link to="/reservasmodal">
          <button >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/6822/6822310.png"
              alt="Incluir"
              
              width="50"
              height="50"             
            />
          </button>
          </Link>

        <ComboSalas onSelectChange={handleSelectChange} />
        
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

        <Button variant="primary" className='mb-0' type="submit" name="cancelarreservas" readOnly>   
        <Col sm ={6}>  
          Cancelar Reservas
        </Col>  
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