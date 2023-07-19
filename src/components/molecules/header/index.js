import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Program Sederhana</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
