import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import highlighter from "../../assets/projects/Highlighter.png";
import sipSavvy from "../../assets/projects/SipSavvy.png";
import FoodFinder from "../../assets/projects/FoodFinder.png";
import Filmee from "../../assets/projects/Filmee.png";
import Ultraverse from "../../assets/projects/Ultraverse.png";
import VistoraDash from "../../assets/projects/VistoraDash.png";



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
              description="An interactive social platform where users can create posts, share content, and engage in meaningful discussions through comments and interactions."
              ghLink="https://github.com/Oscarc691/Ultraverse-Intern"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VistoraDash}
              isBlog={false}
              title="Vistora"
              description="An AI-powered web platform designed to streamline and accelerate the insurance claims process by automating verification, reducing errors, and improving transparency for both providers and patients."
              ghLink="https://github.com/Oscarc691/Vistora"
       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FoodFinder}
              isBlog={false}
              title="Food Finder"
              description="A smart recipe search engine that allows users to discover meals based on the ingredients they already have, making cooking easier, more efficient, and waste-free."
              ghLink="https://github.com/Oscarc691/FoodFinder"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Filmee}
              isBlog={false}
              title="Filmee"
              description="A movie search and recommendation engine that helps users quickly discover films by title, genre, or keywords, while providing personalized recommendations based on their preferences and viewing history."
              ghLink="https://github.com/Oscarc691/Filmee"
       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={highlighter}
              isBlog={false}
              title="Highlighter"
              description="A smart calendar application featuring advanced agenda management and scheduling tools, designed to help users organize events, set reminders, and optimize their time more efficiently."
              ghLink="https://peaceful-island-43281.herokuapp.com/"
       
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sipSavvy}
              isBlog={false}
              title="SipSavvy"
              description="A cocktail and alcohol recipe search engine that lets users explore, discover, and mix drinks based on ingredients, categories, or flavor preferences."
              ghLink="https://github.com/CarlyGallagher/stone-martini"
       
            />
          </Col>
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
