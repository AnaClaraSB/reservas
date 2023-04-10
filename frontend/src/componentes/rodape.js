import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function rodape() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Reservas de salas</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default rodape;