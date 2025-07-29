import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import sobremi from "../assets/office.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [descargando, setDescargando] = useState(false);

  const handleDescarga = () => {
    setDescargando(true);
    const link = document.createElement("a");
    link.href = "/cv-jesus-borja.pdf"; 
    link.download = "CV_Jesus_Borja.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      alert("📄 ¡CV descargado con éxito!");
      setDescargando(false);
    }, 1500);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="sobre-mi" className="py-5 bg-light" data-aos="fade-up">
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0">
            <img
              src={sobremi}
              alt="Jesús David Borja"
              className="img-fluid rounded shadow img-sobremi"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <h2 className="fw-bold mb-4">Sobre Mí</h2>
            <p className="text-muted mb-4">
              Soy tecnólogo en desarrollo de software apasionado por crear
              soluciones digitales innovadoras, funcionales y centradas en el
              usuario. Me especializo en combinar diseño limpio con código
              eficiente para construir experiencias digitales que realmente
              marquen la diferencia.
            </p>
            <p className="text-muted mb-4">
              A lo largo de mi trayectoria, he participado en proyectos que van
              desde aplicaciones web empresariales hasta soluciones móviles,
              aplicando siempre las mejores prácticas y explorando tecnologías
              emergentes para mantenerme a la vanguardia.
            </p>
            <p className="text-muted mb-4">
              Me definen la capacidad para resolver problemas complejos, la
              atención meticulosa al detalle y un compromiso constante con el
              aprendizaje continuo. Disfruto asumir nuevos retos y evolucionar
              junto a un campo tan dinámico como el desarrollo de software.
            </p>

            <Row className="mb-4">
              <Col md={6}>
                <h4 className="fw-semibold mb-3">Educación</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex">
                    <i
                      style={{ color: "#3d9ec4" }}
                      className="bi bi-award-fill  me-2 mt-1"
                    ></i>
                    <div>
                      <p className="fw-medium mb-0">
                        Tecnología en Desarrollo de Software
                      </p>
                      <small className="text-muted">
                        Fundación Universitaria Tecnologico Comfenlco 2021-2020
                      </small>
                    </div>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <h4 className="fw-semibold mb-3">Experiencia</h4>
                <ul className="list-unstyled">
                  <li className="d-flex">
                    <i
                      style={{ color: "#3d9ec4" }}
                      className="bi bi-briefcase-fill  me-2 mt-1"
                    ></i>
                    <div>
                      <p className="fw-medium mb-0">Desarrollador Front-end</p>
                      <small className="text-muted">
                        Pasantia en Colmotica ingenieria s.a.s, presente
                      </small>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>

            <Button
              className="btn-custom-outline d-flex align-items-center"
              onClick={handleDescarga}
              disabled={descargando}
            >
              {descargando ? "Descargando..." : "Descargar CV"}
              <i className="bi bi-download ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
