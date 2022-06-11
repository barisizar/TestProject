import "./main.css";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Axios from "axios";

const Main = () => {
  let navigate = useNavigate();
  React.useEffect(() => {
    const login = localStorage.getItem("logged");
    if (login === "true") {
      navigate(`/landing`);
    }
  }, []);

  const logging = () => {
    console.log("Logged user");
    localStorage.setItem("logged", true);
  };

  return (
    <div className="Main-header">
      <h1>Slack Chat</h1>
      <a
        href="https://slack.com/oauth/v2/authorize?client_id=3674615305024.3645427732806&scope=&user_scope=channels:read,chat:write"
        onClick={logging}
      >
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
        />
      </a>
    </div>
  );
};

export default Main;
