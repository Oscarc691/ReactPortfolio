import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buzzer from "../../Assets/Projects/Buzzer.png";


import sipSavvy from "../../Assets/Projects/SipSavvy.png";



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
              imgPath={buzzer}
              isBlog={false}
              title="Buzzer"
              description="Interactive website where people can post share and comment"
              ghLink="https://fathomless-wave-31109.herokuapp.com/"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipSavvy}
              isBlog={false}
              title="Sip Savvy"
              description="Ever had random liquor from a recent party lying around? heres your answer! Sip Savvy is a website that allows you to search for a drink by name or ingredient. It also allows you to save your favorite drinks to your profile."
              ghLink="https://sip-savy.herokuapp.com"
       
            />
          </Col>

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
