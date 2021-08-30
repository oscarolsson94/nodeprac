import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  /* /users is common routes for all enpoints */
  res.send("Hello");
});

export default router;
