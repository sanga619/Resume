import React from "react";
import "../App.css";

export default function SkillsComponent() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
        <div className="col-4">
          <p className="text-center">SKILLS</p>
        </div>
        <div className="col-4">
          <hr className="hrr"></hr>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Languages</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">C, , Java, JavaScript</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Database</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">MySQL, MongoDB</p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Web Technology</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
            HTML, CSS, React.js, Bootstrap4, Node.js, Express.js, Mongoose,
          
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <p className="font-weight-bold text-secondary">Tools</p>
        </div>
        <div className="col-8 offset-1 text-justify">
          <p className="para">
          VS Code, IntelliJ IDEA, MongoDB Compass, MySQL Workbench, eclipse
          </p>
        </div>
      </div>
    </div>
  );
}
