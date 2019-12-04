const express = require("express");

const server = express();

server.get("/teste", (req, res) => {
  const nome = req.query.nome;

  return res.send({ message: `hello ${nome}` });
});

server.get("/teste2/:id", (req, res) => {
  const id = req.params.id;

  return res.send({ message: `id ${id}` });
});

server.listen(3005);
