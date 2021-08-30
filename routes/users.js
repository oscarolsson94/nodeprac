import express from "express";

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

export default router;
