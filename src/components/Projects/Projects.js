import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import highlighter from "../../assets/projects/Highlighter.png";
import sipSavvy from "../../assets/projects/SipSavvy.png";
import FoodFinder from "../../assets/projects/FoodFinder.png";
import Filmee from "../../assets/projects/Filmee.png";
import Ultraverse from "../../assets/projects/Ultraverse.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ultraverse}
              isBlog={false}
              title="Ultraverse"
              description="Interactive website where people can post, post share and comment"
              ghLink="https://github.com/Oscarc691/Ultraverse-Intern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodFinder}
              isBlog={false}
              title="Food Finder"
              description="Ingriedient based recipe search engine"
              ghLink="https://github.com/Oscarc691/FoodFinder"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Filmee}
              isBlog={false}
              title="Filmee"
              description="Movie searching and recommendation engine."
              ghLink="https://github.com/Oscarc691/Filmee"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={highlighter}
              isBlog={false}
              title="Highlighter"
              description="Calender with advanced agenda and scheduling method."
              ghLink="https://peaceful-island-43281.herokuapp.com/"
       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipSavvy}
              isBlog={false}
              title="SipSavvy"
              description="alcohol and cocktail recipe search engine."
              ghLink=""
       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
