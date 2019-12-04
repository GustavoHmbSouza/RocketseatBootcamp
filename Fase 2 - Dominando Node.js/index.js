const express = require("express");

const server = express();

server.get("/teste", (req, res) => {
  return res.send("Hello Word");
});

server.listen(3005);
