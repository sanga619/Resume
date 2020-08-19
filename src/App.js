import React from 'react';
import './App.css';
import SkillsComponent from "./components/SkillsComponent";
import EducationComponent from "./components/EducationComponent";
import WorkingExperience from "./components/WorkingExperience";
import ProjectComponent from "./components/ProjectComponent";
import ContactComponent from "./components/ContactComponent";
import CertficatesComponents from "./components/CertficatesComponents";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div class="col-sm-8 order-sm-1 order-2">
          <h2 className=" text-center">Resume</h2>
          <h5 className="font-weight-normal text-center text-secondary">
            Abhishek kumar
          </h5>
          <SkillsComponent />
         
          <EducationComponent />
         
          <CertficatesComponents />
          <ContactComponent />
        </div>
        <div class="col-sm-4 order-1">
          <CardComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
