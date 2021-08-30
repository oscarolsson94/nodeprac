import express from "express";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", usersRoutes); // set default path for all routes

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
