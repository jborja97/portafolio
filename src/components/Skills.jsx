import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import React, {  useEffect } from 'react';
import { motion } from "framer-motion";


const skills = [
  {
    category: "Frontend",
    icon: "bi-code-slash",
    color: "primary",
    items: ["HTML5 / CSS3", "JavaScript / TypeScript", "React / Vite.js", "Tailwind CSS / boostrap"]
  },
  {
    category: "Backend",
    icon: "bi-server",
    color: "success",
    items: ["Node.js / Next", "PHP", "java / Springboot", "API RESTful"]
  },
  {
    category: "Bases de Datos",
    icon: "bi-database",
    color: "purple",
    items: ["MySQL ", "MongoDB "]
  },
  {
    category: "DevOps",
    icon: "bi-cloud",
    color: "warning",
    items: ["Git / GitHub", "Docker"]
  },
  {
    category: "Desarrollo Móvil",
    icon: "bi-phone",
    color: "danger",
    items: [ "Responsive Design"]
  },
  {
    category: "Herramientas",
    icon: "bi-tools",
    color: "info",
    items: ["VS Code / PHPStorm", "Figma ", "Postman / Insomnia", "Jira / Trello"]
  },
  {
    category: "Habilidades Blandas",
    icon: "bi-people",
    color: "teal",
    items: ["Trabajo en equipo", "Resolución de problemas", "Comunicación efectiva", "Gestión del tiempo"]
  },
  {
    category: "Metodologías",
    icon: "bi-diagram-3",
    color: "indigo",
    items: ["Scrum / Agile", "Kanban"]
  }
];

const Skills = () => {

   useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
  return (
    <section id="habilidades" className="py-5 bg-light" data-aos="fade-up">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mis Habilidades</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Tecnologías y herramientas con las que trabajo
          </p>
        </div>
        
        <Row xs={1} md={2} lg={4} className="g-4">
          {skills.map((skill, index) => (
            <Col key={index}>
           <motion.div whileHover={{scale: 1.05, y: -5}} transition={{duration: 0.3}}>
              
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className={`bg-${skill.color}-100 text-${skill.color} rounded p-3 mb-3 d-inline-block`}>
                    <i className={`bi ${skill.icon} fs-4`}></i>
                  </div>
                  <Card.Title>{skill.category}</Card.Title>
                  <ul className="list-unstyled">
                    {skill.items.map((item, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center">
                        <span className={`bg-${skill.color} rounded-circle me-2`} style={{ width: '8px', height: '8px' }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;