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

const PORT = 3001;
expr.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
