import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="mb-4 mb-md-0">
            <a href="#inicio" className="text-white fs-3 fw-bold text-decoration-none" style={{ fontFamily: "'Pacifico', cursive" }}>
              JDB
            </a>
          </Col>
          <Col md={6}>
            <Nav className="flex-wrap justify-content-center justify-content-md-end">
              <Nav.Link href="#inicio" className="text-white-50 mx-2">Inicio</Nav.Link>
              <Nav.Link href="#proyectos" className="text-white-50 mx-2">Proyectos</Nav.Link>
              <Nav.Link href="#sobre-mi" className="text-white-50 mx-2">Sobre Mí</Nav.Link>
              <Nav.Link href="#habilidades" className="text-white-50 mx-2">Habilidades</Nav.Link>
              <Nav.Link href="#contacto" className="text-white-50 mx-2">Contacto</Nav.Link>
            </Nav>
          </Col>
        </Row>
        
        <hr className="border-secondary my-4" />
        
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="text-white-50 mb-0">
              &copy; 2025 Jesús David Borja
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://linkedin.com/in/jesusborja" className="text-white-50 hover-white">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white-50 hover-white">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="#" className="text-white-50 hover-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white-50 hover-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;