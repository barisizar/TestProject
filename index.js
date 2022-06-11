const express = require("express");
const router = require("./routes");

var cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
