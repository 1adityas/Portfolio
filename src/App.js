import "./App.css";
import Skills from "./components/skills/Skills.js";
import Exp from "./components/exp/Exp.js";
import Timeline from "./components/timeline/Timeline.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedin,
  faHtml5,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopesBulk} from "@fortawesome/free-regular-svg-icons";

library.add(faFacebookF, faTelegram, faTwitter, faGithub, faLinkedin, faHtml5);
function App() {
  return (
    <>
      <div className="body">
        <div className="flex">
          <div className="adiPhoto">
            <img
              class="img"
              src={require("./assets/adipic_circle.png")}
              alt="yoooo"
            />
          </div>
          <div className="intro">
            <p id="top">Hi There,</p>
            <p id="mid">I'm Aditya Pratap Singh</p>
            <p id="body">
              I'm Junior Software Developer with a passion for everything from
              frontend to backend to exploring new Tech. Welcome to my corner of
              Internet.I am Glad you are here.
            </p>
          </div>
        </div>
      </div>
      <div class="content">
        <div className="table">
          <ul className="contacts">
            <li>
              <a href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-facebook">
                  <FontAwesomeIcon icon="fa-brands fa-telegram" />
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-twitter">
                  <FontAwesomeIcon 
                  icon="fa-solid fa-envelopes-bulk" />
                  {/* <FontAwesomeIcon icon={["fab", "tml5"]} /> */}
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/1adityas">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-google-plus">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aditya-pratap-singh-7488471b0/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="fa fa-linkedin">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <hr className="line1" />
        <p className="topText">Skills</p>
        <Skills></Skills>
        <Exp></Exp>
        <Timeline></Timeline>
      </div>
    </>
  );
}
//alright then checking git
export default App;
