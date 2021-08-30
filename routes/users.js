import express from "express";
import {
  createUser,
  deleteById,
  getUsers,
  getUserById,
  updateUserWithId,
} from "../controllers/users.js";

const router = express.Router();

/* /users is common routes for all enpoints */
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id", deleteById);

router.patch("/:id", updateUserWithId);

export default router;
