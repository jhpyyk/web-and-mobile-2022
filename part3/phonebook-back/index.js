const express = require("express");
const expr = express();

let persons = [
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 2,
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 3,
  },
];

expr.get("/api/persons", (req, res) => {
  res.json(persons);
});

expr.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

expr.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const PORT = 3001;
expr.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
