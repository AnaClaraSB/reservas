import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Dropdown } from 'react-bootstrap';
import { useParams, useNavigate  } from "react-router-dom";
import Cabecalho from '../../src/componentes/cabecalho';
import Footer from '../../src/componentes/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../componentes/style.css';
import salasService from '../services/salasService';
import reservasService from '../services/reservasService';


function Reservas() {
  
  const { id } = useParams();
  const [reserva, setFormData] = useState({});
  
  const [salaReservas, setSalas] = useState([]);
  const [valorSalas, setValorSalas] = useState('');

  const history = useNavigate();
  
  useEffect(() => {
      async function fetchFormData () {
      
      try {

        const responseSala = await salasService.getSalas();
        setSalas(responseSala.data);

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
        
        //const id = event.target._id.value;
        if (event.nativeEvent.submitter.name === "salvar") {

          if (typeof id === 'undefined') {
              
              await reservasService.postReservas(reserva);
              alert('incluido com sucesso!');
               
          }
          else {
              
              await reservasService.updtReservas(id, reserva);
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
      setValorSalas(event.target.value);
    };
  
  return (    

    <Container fluid>
      <Row>
        <Cabecalho />
      </Row>
     
      <Row className='resaervas'>
      
        <Form onSubmit={handleSubmit}>       
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Selecione uma sala
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {salaReservas.map((item) => (
                  <Dropdown.Item key={item._id} href="#">
                    {item.numero}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>            
            <Form.Label>Data da Reserva':</Form.Label>
            <Form.Control type="date" name="data" value={reserva.data} onChange={handleChange}/>
            <Form.Label>Hora Inicio:</Form.Label>
            <Form.Control type="number" name="inicio" value={reserva.inicio} onChange={handleChange}/>
            <Form.Label>Hora Fim:</Form.Label>
            <Form.Control type="number" name="fim" value={reserva.fim} onChange={handleChange}/>
            <Form.Label>Observacao:</Form.Label>
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