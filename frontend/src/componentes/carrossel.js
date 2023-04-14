import {React, useState, useEffect} from 'react';
import {Container, Row, Card, Button } from 'react-bootstrap';
import  Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Carrossel() {

  const [carrosselData, setCarrosselData] = useState([]);

  useEffect(() => {
    async function fetchCarrosselData () {
    
    try {
      
      const response = await axios.get('http://localhost:5000/salas');
      setCarrosselData(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchCarrosselData();
  },[]);

  return (
    
      <Container fluid>

      <Row>

      <Card>            
          <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                  <Carousel>        
                      {carrosselData.map((item, index) => (
                      <Carousel.Item key={item.id}>
                        <Link to={`/salas/${item._id}`} >
                            <img className='wow' key={index} src={item.img} alt={item.numero} />                            
                          </Link>
                      <Carousel.Caption>
                      <h3>{item.valor}</h3>
                      <p>{item.descricao}</p>
                      <Button variant="primary" href='/reservas/inserir'>
                        Reserve!
                      </Button>
                      </Carousel.Caption>
                      </Carousel.Item>
                      ))}
                  </Carousel>
                 
              </Card.Text>          
          </Card.Body>
      </Card>

      </Row>

      </Container>

  );
}

export default Carrossel;