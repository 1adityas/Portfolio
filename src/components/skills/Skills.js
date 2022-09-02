import React from "react";
import "./Skills.css";
import data from "./skillData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import log from "../../assets/html55.png";

function Skills() {
  var gridItems = data.map((item) => {
    return (
      <div className="content2">
        <img id="hey" src={require(`../../assets/${item.img}.png`)} />
        {/*not sure why a variable was not working instad of ticks */}
        <p className="coverText">{item.skill}</p>
      </div>
    );
  });
  return (
    <>
      <div className="grid">{gridItems}</div>
    </>
  );
}
export default Skills;
