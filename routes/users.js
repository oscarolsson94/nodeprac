import express from "express";

const router = express.Router();

/* /users is common routes for all enpoints */
router.get("/", (req, res) => {
  res.send("Hello");
});

export default router;
