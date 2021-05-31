import React, { useState } from "react";
import { sendFeed } from "../../actions";
import { useDispatch } from "react-redux";
import "./styles.css";

function NewFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 offset-md-3 box">
        <h3>Feedback</h3>
        <div className="mb-3">
          <input
            type="name"
            className="form-control input"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Fullname"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows="3"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-success mb-3"
          onClick={() =>
            dispatch(
              sendFeed({ name, email, message }),
              setName(""),
              setEmail(""),
              setMessage("")
            )
          }
        >
          Send Feedback
        </button>
      </div>
    </div>
  );
}

export default NewFeedback;
