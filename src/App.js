import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import perfil from "./assets/perfil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./components/AllProjects";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Hero Section
  const HeroSection = () => {
    return (
      <section
        id="inicio"
        className="section-perfil"
        style={{ paddingTop: "150px" }}
        data-aos="fade-up"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <h1
                className="fw-bold mb-3"
                style={{
                  fontFamily: "Courier New, monospace",
                  color: "#302F2F",
                }}
              >
                <Typewriter
                  words={[
                    "Jesús David Borja",
                    "Tecnólogo en Desarrollo de Software",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>

              <p className="text-muted mb-4">
                Desarrollo soluciones tecnológicas elegantes y funcionales,
                enfocadas en crear experiencias excepcionales para los usuarios.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3">
                <Button
                  style={{ background: "#3D9EC4", border: "none" }}
                  href="#proyectos"
                >
                  Ver proyectos
                </Button>
                <Button
                  variant="outline-primary"
                  className="btn-contactar"
                  href="#contacto"
                >
                  Contactar
                </Button>
              </div>
            </div>
            <div className="col-md-6 text-center img-incial">
              <img
                src={perfil}
                alt="Jesús David Borja"
                className="img-circulo"
                style={{ maxHeight: "300px", borderRadius: "5%",  } }
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll(".fade-section");
    sections.forEach((section) => {
      section.classList.add(
        "opacity-0",
        "translate-y-20",
        "transition-all",
        "duration-500"
      );
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const Home = () => (
    <>
      <Header />
      <HeroSection />
      <Projects className="fade-section" />
      <About className="fade-section" />
      <Skills className="fade-section" />
      <Contact className="fade-section" />
      <Footer />
    </>
  );

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
