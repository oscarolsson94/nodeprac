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

  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User with the name ${user.firsName} added to the database`);
});

export default router;
