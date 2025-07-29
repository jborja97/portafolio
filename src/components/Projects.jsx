import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Modal,
} from "react-bootstrap";
import crudjsonserver from "../assets/Crud-jsonserver.png";
import Ecommerce from "../assets/sistemapos.png";
import Barberia from "../assets/Barberia.png";
import crudSpring from "../assets/crud-spring.png";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

// 👉 Función para asignar color según el nombre del tag
const getBadgeColor = (tag) => {
  const colors = {
    react: "primary",
    "next.js": "black",
    mongodb: "info",
    flutter: "secondary",
    firebase: "danger",
    "rest api": "warning",
    "vue.js": "success",
    "d3.js": "danger",
    python: "primary",
    php: "secondary",
    laravel: "danger",
    mysql: "warning",
    javascript: "warning",
    express: "dark",
    postgresql: "info",
    django: "secondary",
    aws: "dark",
     html: "black",
     boostrap: "primary",
     css: "secondary"
  };

  return colors[tag.toLowerCase()] || "light"; // color por defecto si no se encuentra
};

const projects = [
  {
    id: 1,
    title: "Sistema POS",
    description:
      "Aplicación full-stack que integra gestión de inventario y panel administrativo. Desarrollada con React, Next.js y MYSQL.",
    tags: ["React", "Next.js", "Mysql"],
    image: Ecommerce,
  },

{
    id: 2,
    title: "CRUD Básico con , ant desing, json server y Axios",
    description: "Aplicación CRUD que permite gestionar registros usando React como frontend y JSON Server como backend simulado.",
    tags: ["React", "Axios", "JSON Server"],
    image: crudjsonserver,
  },

  {
    id: 3,
    title: "CRUD con React y Spring Boot",
    description: "Aplicación fullstack con frontend en React y backend en Spring Boot, conectada a base de datos MySQL.",
    tags: ["React", "Spring Boot", "MySQL"],
    image: crudSpring,
  },

  {
    id: 4,
    title: "Sistema para una Barberia",
    description:
      "Desarrollo completo de una aplicación web para la gestión de una barbería.",
    tags: ["php", "mysql", "boostrap", "html" , "css"],
    image: Barberia,
  },

 
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="proyectos" className="py-5 " data-aos="fade-up">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mis Proyectos</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Una selección de mis trabajos más recientes en desarrollo de
            software
          </p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        bg={getBadgeColor(tag)}
                        className="me-2 text-capitalize"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="px-0 text-primary text-decoration-none"
                    onClick={() => handleShow(project)}
                  >
                    Ver detalles <i className="bi bi-arrow-right ms-1"></i>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Link to="/proyectos" className="btn btn-custom-outline2">
            Ver todos los proyectos
          </Link>
        </div>
      </Container>

      {selectedProject && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="img-fluid rounded mb-3"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <p>{selectedProject.description}</p>
            <div>
              {selectedProject.tags.map((tag, index) => (
                <Badge
                  key={index}
                  bg={getBadgeColor(tag)}
                  className="me-2 text-capitalize"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
