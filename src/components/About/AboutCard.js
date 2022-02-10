import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brandon Hawkins </span>
            from <span className="purple"> Charlotte, North Carolina.</span>
            <br />
             I am a Software Engineer with a passion for creating applications from ideas. 
            <br />
             I am a former Middle School Orchestra teacher. After teaching online and seeing a shortage of software that can help teachers, I decided to do something about it. I began developing an application to help me solve my problem of organizing songs, students, and sets into logical catagories based on instruments needed and difficulty. This application is still in development, but please take a look at it in the projects page :)
            <br />

            <br />
            Apart from coding here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Play with my dog :)
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Netflix
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
