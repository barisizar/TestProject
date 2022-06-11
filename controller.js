const express = require("express");
const Axios = require("axios");

const home = (req, res) => {
  res.json({ message: "Welcome to server." });
};

tokenPayload = () => {
  let config = {
    headers: {
      Authorization:
        "Bearer xoxp-3674615305024-3647948652709-3675669411008-6929c6c552481a35ca84fccbebde2d44",
    },
  };
};
const connections = async (req, res) => {
  let config = {
    headers: {
      Authorization:
        "Bearer xoxp-3674615305024-3647948652709-3675669411008-6929c6c552481a35ca84fccbebde2d44",
    },
  };
  console.log(config);
  const result = await Axios.get(
    `https://slack.com/api/conversations.list`,
    config
  );
  console.log(result.data.channels[0].name);
  results = [];
  results.push(result.data.channels[0].name);
  results.push(result.data.channels[1].name);
  results.push(result.data.channels[2].name);
  console.log("Channels are ", results);
  res.send(results);
};

const fsd = async (req, res) => {
  console.log(req.body.text);
  await Axios.post(
    "https://hooks.slack.com/services/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",
    {
      text: req.body.text,
    }
  );
};

const general = async (req, res) => {
  console.log(req.body);
  await Axios.post(
    "https://hooks.slack.com/services/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",
    {
      text: req.body.text,
    }
  );
};

const random = async (req, res) => {
  console.log(req.body);
  await Axios.post(
    "https://hooks.slack.com/services/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",
    {
      text: req.body.text,
    }
  );
};

module.exports = {
  home,
  fsd,
  general,
  random,
  connections,
};
