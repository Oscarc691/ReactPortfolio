import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oscar Campos </span>
            originaly from <span className="purple"> San Fernando, California.</span>
            <br />I am a Developer pursuing more knowledge and skills in the industry!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Hangin out with friends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things and learn!"{" "}
          </p>
          <footer className="blockquote-footer">Oscar Campos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
