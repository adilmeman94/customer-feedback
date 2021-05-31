import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="App mt-5">
      <h1>Obvious Technology Practical Test</h1>
      <h2 className="mt-5">
        Implemention of Customer Feedback page
        <br />
        using React Hooks and Redux
      </h2>
      <div className="col-lg-4 col-md-4 col-sm-4 offset-md-4 mt-5">
        <div className="d-grid gap-2">
          <Link to="/feedbacks">
            <button className="btn btn-primary" type="button">
              See All Feedbacks
            </button>
          </Link>
          <Link to="/feedbacks/new">
            <button className="btn btn-primary" type="button">
              Create New Feedback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
