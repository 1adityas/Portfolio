import React from "react";
import "./Exp.css";

function Exp() {
  return (
    <>
      <hr></hr>
      <div className="gridTop">
      <p className="topHeading">Projects</p>

        <div className="card" id="gd1">
          <p className="topic">SRM Mate flutter app</p>
          <hr className="topLine" />
          <img
            src={require("../../assets/srmmate.png")}
            alt="yo"
            className="bodyImg"
          />
          <div className="bodyText">
            A lean and elegant utility to provide students at SRM-IST, NCR with
            access to class notes, reference books and more in just few taps.
            Built using Flutter, SRM Mate works on Android, iOS, and Windows and
            offers steady performance.
          </div>
        </div>
        <div className="card" id="gd2">
          <p className="topic">SRM Mate flutter app</p>
          <hr className="topLine" />
          <img
            src={require("../../assets/srmmate.png")}
            alt="yo"
            className="bodyImg"
          />
          <div className="bodyText">
            A lean and elegant utility to provide students at SRM-IST, NCR with
            access to class notes, reference books and more in just few taps.
            Built using Flutter, SRM Mate works on Android, iOS, and Windows and
            offers steady performance.
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
export default Exp;
