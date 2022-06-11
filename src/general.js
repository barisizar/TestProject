import * as React from "react";
import { useState } from "react";
import Axios from "axios";
import "./chat.css";

const General = () => {
  const [text, setText] = useState("");

  const sendMessage = (event) => {
    if (!text) {
      event.preventDefault();
    } else {
      Axios.post("http://localhost:3001/general", {
        text: text,
      }).then((response) => {
        console.log("response", response);
      });
    }
  };

  return (
    <div className="Chat-header">
      <h1>Slack Chat</h1>
      <div>
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
    </div>
  );
};

export default General;
