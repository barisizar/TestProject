import "./landing.css";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import Axios from "axios";

const Landing = () => {
  const [channels, setChannels] = useState([]);
  let navigate = useNavigate();
  React.useEffect(() => {
    const login = localStorage.getItem("logged");
    if (login === "false") {
      navigate(`/`);
    }
    Axios.get("http://localhost:3001/connections").then((response) => {
      console.log("response", response);
      setChannels(response.data);
      console.log(channels);
    });
  }, []);

  const logOut = () => {
    console.log("Logged out");
    console.log(channels);
    localStorage.setItem("logged", false);
  };
  const fsd = (data) => {
    console.log(data);
    navigate(`/fsd`);
  };
  const general = () => {
    console.log("general channel");
    navigate(`/general`);
  };
  const random = () => {
    console.log("random channel");
    navigate(`/random`);
  };

  return (
    <div className="Landing-header">
      <h1>Slack Chat</h1>
      <button className="button" onClick={random}>
        {channels[0]}
      </button>
      <button className="button" onClick={fsd}>
        {channels[1]}
      </button>
      <button className="button" onClick={general}>
        {channels[2]}
      </button>
      <br />
      <br />
      <br />
      <button onClick={logOut}>Close</button>
    </div>
  );
};

export default Landing;
