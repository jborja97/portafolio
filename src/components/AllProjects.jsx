import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Modal, Button } from "react-bootstrap";
import gestionAppImg from "../assets/gestionapp.png";
import Ecommerce from "../assets/E-commerce.png";
import Analitica from "../assets/Analitica.png";
import cms from "../assets/Sistemacms.png";
import reserva from "../assets/Reservas.png";
import lms from "../assets/Lms.png";
import chatImg from '../assets/chat.png';
import inventarioImg from '../assets/inventario.jpeg'
import portafolioImg from '../assets/portafolio.png'
import { motion } from "framer-motion";

const getBadgeColor = (tag) => {
  const colors = {
  "react": "primary",
  "node.js": "success",
  "mongodb": "info",
  "flutter": "secondary",
  "firebase": "danger",
  "rest api": "warning",
  "vue.js": "success",
  "d3.js": "danger",
  "python": "primary",
  "php": "secondary",
  "laravel": "danger",
  "mysql": "info",
  "javascript": "warning",
  "express": "dark",
  "postgresql": "info",
  "django": "secondary",
  "aws": "dark",
  "socket.io": "secondary",
  "bootstrap": "primary",
  "tailwind css": "info",
  "framer motion": "warning"
};

  return colors[tag.toLowerCase()] || "light";
};

const allProjects = [
    {
    id: 1,
    title: "Plataforma E-commerce",
    description: "Tienda online con carrito, pagos y admin panel.",
    fullDescription:
      "Este proyecto incluye la creación de una tienda digital con funcionalidades de usuario, autenticación, gestión de productos, y un panel administrativo completo.",
    tags: ["React", "Node.js", "MongoDB"],
    image: Ecommerce,
  },
  {
    id: 2,
    title: "App de Gestión de Tareas",
    description: "Gestión de tareas en tiempo real con Flutter y Firebase.",
    fullDescription:
      "La app permite crear, editar y eliminar tareas sincronizadas automáticamente, ideal para equipos de trabajo remoto.",
    tags: ["Flutter", "Firebase"],
    image: gestionAppImg,
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description: "Visualización de datos con gráficas personalizadas.",
    fullDescription:
      "Utilizando D3.js y Vue, este dashboard presenta KPIs y métricas importantes de forma visual para facilitar la toma de decisiones.",
    tags: ["Vue.js", "D3.js", "Python"],
    image: Analitica,
  },
  {
    id: 4,
    title: "Sistema CMS Editorial",
    description: "Gestor de contenidos para publicaciones en línea.",
    fullDescription:
      "Permite crear, publicar y organizar artículos y medios en una plataforma robusta para editores y redactores.",
    tags: ["PHP", "Laravel", "MySQL"],
    image: cms,
  },
  {
    id: 5,
    title: "Sistema de Reservas",
    description: "Web para agendar citas y ver disponibilidad.",
    fullDescription:
      "Los usuarios pueden registrarse, seleccionar servicios, ver disponibilidad y reservar citas. Incluye notificaciones.",
    tags: ["JavaScript", "Express", "PostgreSQL"],
    image: reserva,
  },
  {
    id: 6,
    title: "LMS Educativo",
    description: "Sistema de gestión de aprendizaje completo.",
    fullDescription:
      "Plataforma que ofrece cursos, evaluaciones, foros y seguimiento del progreso de los estudiantes en tiempo real.",
    tags: ["React", "Django", "AWS"],
    image: lms,
  },
  {
    id: 7,
    title: "Chat en Tiempo Real",
    description: "App de mensajería instantánea con WebSocket.",
    fullDescription:
      "Permite a los usuarios enviar y recibir mensajes en tiempo real, con salas privadas y estado de conexión.",
    tags: ["Node.js", "Socket.io", "React"],
    image: chatImg,
  },
  {
    id: 8,
    title: "Sistema de Inventario Web",
    description: "Gestión de inventario para negocios pequeños.",
    fullDescription:
      "Permite registrar productos, actualizar stock, generar reportes y controlar movimientos de entrada y salida.",
    tags: ["PHP", "Bootstrap", "MySQL"],
    image: inventarioImg,

  },
  {
    id: 9,
    title: "Landing Page de Portafolio",
    description: "Página personal moderna y responsiva.",
    fullDescription:
      "Incluye animaciones, presentación profesional, contacto directo y secciones organizadas para destacar habilidades.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: portafolioImg,
  },
  {
    id: 10,
    title: "Plataforma E-commerce",
    description: "Tienda online con carrito, pagos y admin panel.",
    fullDescription:
      "Este proyecto incluye la creación de una tienda digital con funcionalidades de usuario, autenticación, gestión de productos, y un panel administrativo completo.",
    tags: ["React", "Node.js", "MongoDB"],
    image: Ecommerce,
  },
  {
    id: 11,
    title: "App de Gestión de Tareas",
    description: "Gestión de tareas en tiempo real con Flutter y Firebase.",
    fullDescription:
      "La app permite crear, editar y eliminar tareas sincronizadas automáticamente, ideal para equipos de trabajo remoto.",
    tags: ["Flutter", "Firebase"],
    image: gestionAppImg,
  },
  {
    id: 12,
    title: "Dashboard Analítico",
    description: "Visualización de datos con gráficas personalizadas.",
    fullDescription:
      "Utilizando D3.js y Vue, este dashboard presenta KPIs y métricas importantes de forma visual para facilitar la toma de decisiones.",
    tags: ["Vue.js", "D3.js", "Python"],
    image: Analitica,
  },
  {
    id: 13,
    title: "Sistema CMS Editorial",
    description: "Gestor de contenidos para publicaciones en línea.",
    fullDescription:
      "Permite crear, publicar y organizar artículos y medios en una plataforma robusta para editores y redactores.",
    tags: ["PHP", "Laravel", "MySQL"],
    image: cms,
  },
  {
    id: 14,
    title: "Sistema de Reservas",
    description: "Web para agendar citas y ver disponibilidad.",
    fullDescription:
      "Los usuarios pueden registrarse, seleccionar servicios, ver disponibilidad y reservar citas. Incluye notificaciones.",
    tags: ["JavaScript", "Express", "PostgreSQL"],
    image: reserva,
  },
  {
    id: 15,
    title: "LMS Educativo",
    description: "Sistema de gestión de aprendizaje completo.",
    fullDescription:
      "Plataforma que ofrece cursos, evaluaciones, foros y seguimiento del progreso de los estudiantes en tiempo real.",
    tags: ["React", "Django", "AWS"],
    image: lms,
  },
];

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      className="py-5"
      style={{ marginTop: "70px", background: "#ebf5fb " }}
    >
      <Container>
        <h2 className="fw-bold text-center mb-5">Todos los Proyectos</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {allProjects.map((project) => (
            <Col key={project.id}>
             <motion.div whileHover={{scale: 1.05, y: -5}} transition={{duration: 0.3}}>
              <Card
                className="h-100 shadow-sm border-0 rounded-4 cursor-pointer"
                onClick={() => handleShowModal(project)}
              >
                <Card.Img
                  variant="top"
                  src={project.image}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                  }}
                />
                <Card.Body className="p-4">
                  <Card.Title className="fw-semibold">{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <div className="mt-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} bg={getBadgeColor(tag)} className="me-2 text-capitalize">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
              </motion.div>

            </Col>
          ))}
        </Row>

        {/* Modal */}
        {selectedProject && (
          <Modal show={true} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="img-fluid mb-3 rounded"
              />
              <p>{selectedProject.fullDescription}</p>
              <div className="mt-3">
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} bg={getBadgeColor(tag)} className="me-2 text-capitalize">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </section>
  );
};

export default AllProjects;
