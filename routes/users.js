import express from "express";
import {
  createUser,
  deleteById,
  getUser,
  getUserById,
  updateUserWithId,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

/* /users is common routes for all enpoints */
router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteById);

router.patch("/:id", updateUserWithId);

export default router;
