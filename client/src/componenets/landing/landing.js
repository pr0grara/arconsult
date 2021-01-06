import React from "react";
import img from "../../ideas.jpg"
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  gatherAnswers() {
    let answers = document.querySelectorAll(".answer");
    let data = {
      "name": answers[0].value,
      "company": answers[1].value,
      "body": answers[2].value,
    }
    // debugger
    this.props.sendSMS(data)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.gatherAnswers()
    // if (!readyToSMS(e.target)) return;
  }

  render() {
    return (
      <div id="landing">
        <img id="main-photo" src={img} alt="landing"></img>
        <div id="welcome-message">
          <p>Hi 👋 , I'm Ara.</p>
          <p>
            A born builder with a keen eye for design. Whether it is full stack
            web applications or circuit boards and sensors the medium is not so
            important as the art itself.
          </p>
          <p id="stunner">Idea &rarr; Manifestation = The Art of Building</p>
          <p>
            Do you have a project you'd like me to help with? Send me a text
            right now
          </p>
          <div id="sms-form">
            <label>what is your name?</label>
            <input className="answer" type="text"></input>
            <label>your company?</label>
            <input className="answer" type="text"></input>
            <label>what do you want to build?</label>
            <textarea className="answer"></textarea>
            <div className="submit" onClick={this.handleSubmit}>
              Text Ara
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
