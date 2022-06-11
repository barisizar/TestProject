const express = require("express");
const router = express.Router();

const { home, fsd, general, random, connections } = require("./controller");

router.get("/home", home);
router.get("/connections", connections);
router.post("/fsd", fsd);
router.post("/general", general);
router.post("/random", random);
module.exports = router;
