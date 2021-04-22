import React from "react";
import img from "../../ideas.jpg"
import send from "../../send.png";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hover = this.hover.bind(this);
    this.clearField = this.clearField.bind(this);
    this.onChange = this.onChange.bind(this);
    this.data = {
      "firstName": "",
      "lastName": "",
      "number": 0,
      "message": "",
    }
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

  async addMsgToDom(msg, idx) {
    let welcome = document.querySelector('#welcome-message');
    let parent = document.createElement('div');
    parent.classList = `.message.${idx}`;
    welcome.appendChild(parent);
    
    for (let i = 0; i < msg.length; i++) {
      let char = document.createElement('div');
      msg[i] === " " ? char.textContent = `\u00a0` : char.textContent = msg[i];
      char.classList = idx === "thanks" ? 'fade-in-end' : 'fade-in';
      parent.appendChild(char);
    }
  }
  
  async deployMsg(domList) {
    for (let i = 0; i < domList.length; i++) {
      setTimeout(() => domList[i].classList.add('appear'), i * 35 + 4000);
      setTimeout(() => domList[i].classList.remove('appear'), i * 35 + 15000);
    }
    // while (document.querySelectorAll('.appear').length > 0) {}
    // return "choop"
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.gatherAnswers()
    let smsContainer = document.querySelector("#sms-container");
    let thanks = document.querySelector('#thank-you');
    smsContainer.style.opacity = 0;
    let photo = document.querySelector('#main-photo');
    let background = document.querySelector('#background');
    photo.style.opacity = 1;
    background.style.opacity = 0;
    thanks.style.opacity = 1
    // this.addMsgToDom("thank you for reaching out, i'll be in touch", 'thanks')
    // let thanks = document.querySelector('.message.thanks');
    // thanks.style.opacity = 1;
    // if (!readyToSMS(e.target)) return;
  }

  async componentDidMount() {
    let photo = document.querySelector('#main-photo');
    let background = document.querySelector('#background');
    let yes = document.querySelector('#yes-button');
    let messages = ["Hi, I'm Ara and I build things...", "want to talk?"]

    setTimeout(() => photo.style.opacity = 0, 3000); //fade photo out
    setTimeout(() => background.style.opacity = 1, 3000) //flip background color from white to black
    setTimeout(() => {
      yes.style.opacity = 1
      yes.style.zIndex = 1
    }, 7000) //flip background color from white to black
    setTimeout(() => {
      yes.style.opacity = 0
      yes.style.zIndex = -1
    }, 20000) //flip background color from white to black

    for (let i = 0; i < messages.length; i++) {
      await this.addMsgToDom(messages[i], i);
    }
    let domMsg1 = document.querySelectorAll('.fade-in');
    await this.deployMsg(domMsg1);
  }

  hover(e) {
    e.preventDefault();
    // debugger
    switch (e.type) {
      case "mouseover":
        e.currentTarget.style.boxShadow = "5px 5px 1px white";

        break;
      case "mouseleave":
        e.currentTarget.style.boxShadow = "0px 0px 0px black";
        break;
      default:
        return
    }
    // debugger
  }

  gatherInfo() {
    let smsContainer = document.querySelector('#sms-container');
    // let name = document.createElement('div');
    // let contact = document.createElement('div');
    // name.classList = 'input';
    // contact.classList = 'input';
    smsContainer.style.opacity = 1;
  }

  clearField(e) {
    e.preventDefault();
    let val = e.currentTarget.value;
    if (val === "name" || val === "phone or email" || val === "msg") e.currentTarget.value = "";
    return
  }

  onChange(e) {
    e.preventDefault();
    e.currentTarget.value = e.currentTarget.value + e.key;
  }

  render() {
    return (
      <div id="landing">
        <div className='frame'>
          <div id="welcome-message"></div>
          <div id="yes-button" onMouseOver={this.hover} onMouseLeave={this.hover} onClick={this.gatherInfo}>yes</div>
          <div id="sms-container">
            <div id="sms-form">
              <div>send me a free text</div>
              <input className="answer" type="text" defaultValue="name" onClick={this.clearField} onChange={this.captureData}></input>
              <input className="answer" type="text" defaultValue="phone or email" onClick={this.clearField} onChange={this.captureData}></input>
              <textarea className="answer msg" defaultValue="msg" onClick={this.clearField} onChange={this.captureData}></textarea>
              {/* <div className="submit" onClick={this.handleSubmit}>
                Text Ara
              </div> */}
            </div>
            <img id="send" src={send} alt="send" onClick={this.handleSubmit}></img>
          </div>
          <div id='background'></div>
          <div id="thank-you">
            <div>thanks for reaching out</div>
            <div>i'll be in touch 😁💡</div>
          </div>
          <img id="main-photo" src={img} alt="landing"></img>
        </div>
      </div>
    );
  }
}

export default Landing;
