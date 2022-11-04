import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

mongoose
  .connect(process.env.URI)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log("Server Running on port: 8080")
    )
  )
  .catch((err) => console.log(err.message));
