const express = require("express");
const router = express.Router();

let users = [
  {
    id: 1,
    name: "budi",
    age: 20,
  },
  {
    id: 2,
    name: "buda",
    age: 21,
  },
  {
    id: 3,
    name: "bude",
    age: 19,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  res.json(user);
});

router.post("/", (req, res) => {
  if (!req.body.name || !req.body.age) {
    return res.status(400).json({ message: "Name and age are required" });
  }
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.json(newUser);
});

module.exports = router;
