import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const URI = "";
const PORT = process.env.PORT || 8080;

mongoose
  .connect(URI)
  .then(() =>
    app.listen(PORT, () => console.log("Server Running on port: 8080"))
  )
  .catch((err) => console.log(err.message));
