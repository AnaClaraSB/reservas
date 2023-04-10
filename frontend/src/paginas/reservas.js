import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Table,} from 'react-bootstrap';
//import Cabecalho from '../componentes/cabecalho';
import '../componentes/style.css';
import reservasService from '../services/reservasService';
import salasService from '../services/salasService';
import ComboSalas from '../componentes/combosalas';
import Cabecalho from '../componentes/cabecalho';
import Footer from '../componentes/footer';

function Resaervas() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
      async function fetchTableData () {
      
      try {
        
        const response = await reservasService.getReservas();
        //const response = await axios.get('http://localhost:2527/api/salas');
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
  
      };
      fetchTableData();
    },[tableData]); 

    async function handlecancel(id) {
      var confirma = window.confirm('Confere?');
      if(confirma){
        try{
            //await axios.delete(`http://localhost:2527/api/deltsalas/${id}`);
            await salasService.deltSalas(id);
            alert('reserva cancelada deletado com sucesso!');
        } catch (error){
          console.error(error);
        }
      }
      }
  
  return (    

    <Container fluid>
      <Row>
        <Col xs={12}>
        <Cabecalho />
        </Col>
      </Row>
     
      
        <Card>
          <Card.Body>
          <Row className='reservas'>
          <Button variant="success" size='lg' type="submit" href='/assalas'>
              incluir
            </Button>
          <Table responsive striped bordered hover variant="light">
          <thead>
            <tr>
              <th>imgLink</th>
              <th>Numero</th>
              <th>Capacidade</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {tableData.map((row, index) => {
              return (
            <tr key={index} data-toogle="tooltip" title={row.imgsala}>
                <td>{row.imgsala}</td>
                <td>{row.numero}</td>
                <td>{row.capacidade}</td>
                <td>{row.descricao}</td>
                <td>{row.valor}</td>
                <td><a href={`/assalas/${row._id}`}>
                  </a>
                </td>
                <td><a href='#'>
                  </a>
                </td>
            </tr>
          );
          })}
          </tbody>
           </Table>
           <Button variant="dark" size='lg' href='/index'>
              Retornar
            </Button>
            </Row>
           </Card.Body>
        </Card>

      <ComboSalas/>
      
      <Footer/>

    </Container>
  );
}

export default Resaervas;