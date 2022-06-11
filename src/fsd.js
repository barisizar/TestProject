import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Axios from "axios";
import "./chat.css";

const Fsd = () => {
  const [text, setText] = useState("");

  const sendMessage = (event) => {
    if (!text) {
      event.preventDefault();
    } else {
      Axios.post("http://localhost:3001/fsd", {
        text: text,
      }).then((response) => {
        console.log("response", response);
      });
    }
  };

  return (
    <div className="Chat-header">
      <h1>Slack Chat</h1>
      <input
        className="input"
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button className="button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default Fsd;
