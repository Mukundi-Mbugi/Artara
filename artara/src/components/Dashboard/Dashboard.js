import React from "react";
import user from "./user.svg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row dash">
          <div className="col-md-3">
            <img src={user} alt="avatar" id="avatar" />
          </div>
          <div className="col-md-3">
            <button className="upload-btn">upload photo</button>
          </div>
          <div className="col-md-3">
            <button className="delete-btn">delete photo</button>
          </div>
          <div className="col-md-3">
            <button className="create-item-btn">create new project</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 log">
            <button id="logout-btn">logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
