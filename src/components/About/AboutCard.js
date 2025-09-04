import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi, I’m Oscar Campos — a developer from San Fernando, California, passionate about building innovative applications and expanding my expertise in software development.
          </p>
          <p style ={{textAlign: 'Justify'}}>
              Beyond coding, I enjoy gaming, fitness, and connecting with friends—activities that keep me balanced and creative. My philosophy is simple:
              “Strive to build, learn, and innovate every day.”
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
