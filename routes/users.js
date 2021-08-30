import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

/* /users is common routes for all enpoints */
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firsName} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = user.find((user) => user.id === id);

  res.send(foundUser);
});

export default router;
