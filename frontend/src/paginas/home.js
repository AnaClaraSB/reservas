import React from "react";
//import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Cabecalho from "../componentes/cabecalho";
import Footer from "../componentes/footer";
import Carrossel from "../componentes/carrossel";

function Home() {
  return (
    <Container>
      
      <Cabecalho />

      <Carrossel />

      <Footer />

    </Container>
  );
}

export default Home;
