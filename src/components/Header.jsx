import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleShow = () => setShow(true);

  const handleScroll = (sectionId) => {
    setActiveSection(sectionId); // Marcar como activo

    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "proyectos", label: "Proyectos" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "habilidades", label: "Habilidades" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header
      className="fixed-top shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Container>
        <Navbar expand="md" className="py-3 nav-link-hover">
          <motion.span
            onClick={() => handleScroll("inicio")}
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="navbar-brand fs-3 fw-bold"
            style={{
              fontFamily: "'Pacifico', cursive",
              color: "#3d9ec4",
              cursor: "pointer",
            }}
          >
            JDB
          </motion.span>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="mx-2 fw-medium"
                  style={{
                    color: activeSection === item.id ? "#3d9ec4" : "#000",
                    fontWeight: activeSection === item.id ? "600" : "500",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
