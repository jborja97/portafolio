import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setShowModal(true);
      form.reset();
      setValidated(false);
    }
    setValidated(true);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contacto" className="py-5" data-aos="fade-up">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contacto</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            ¿Tienes un proyecto en mente? Contáctame y conversemos sobre cómo
            puedo ayudarte
          </p>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6} className="mb-3 mb-md-0">
                  <Form.Group controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Tu nombre"
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa tu nombre
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="tu@email.com"
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un email válido
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Asunto del mensaje"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingresa un asunto
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  required
                  placeholder="Tu mensaje"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor ingresa tu mensaje
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPrivacy">
                <Form.Check
                  required
                  label="Acepto la política de privacidad"
                  feedback="Debes aceptar para continuar"
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: "#3d9ec4",
                  color: "white",
                  border: "none",
                }}
                type="submit"
                className="w-100"
              >
                Enviar mensaje
              </Button>
            </Form>
          </Col>

          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fw-semibold mb-4">Información de contacto</h3>

                <div className="mb-4 d-flex">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    <i
                      className="bi bi-envelope-fill "
                      style={{ color: "#3d9ec4" }}
                    ></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-0">Email</p>
                    <a
                      href="mailto:contacto@jesusdavidborja.com"
                      style={{ color: "#3d9ec4" }}
                    >
                      jesusdborjae@gmial.com 
                    </a>
                  </div>
                </div>

                <div className="mb-4 d-flex">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    <i
                      className="bi bi-telephone-fill "
                      style={{ color: "#3d9ec4" }}
                    ></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-0">Teléfono</p>
                    <a href="tel:+573121234567" style={{ color: "#3d9ec4" }}>
                      +57 3105744255
                    </a>
                  </div>
                </div>

                <div className="mb-4 d-flex">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                    <i
                      className="bi bi-geo-alt-fill "
                      style={{ color: "#3d9ec4" }}
                    ></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-0">Ubicación</p>
                    <p className="text-muted mb-0">Barranquilla, Colombia</p>
                  </div>
                </div>

               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Success Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center p-5">
          <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-4">
            <i className="bi bi-check-circle-fill text-success fs-1"></i>
          </div>
          <h3 className="fw-bold mb-3">¡Mensaje enviado!</h3>
          <p className="text-muted mb-4">
            Gracias por contactarme. Te responderé a la brevedad posible.
          </p>
          <Button
            style={{
              backgroundColor: "#3d9ec4",
              color: "white",
              border: "none",
            }}
            onClick={() => setShowModal(false)}
          >
            Aceptar
          </Button>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Contact;
