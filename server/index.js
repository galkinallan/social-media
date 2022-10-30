import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/database.js";
import postsRoutes from "./routes/posts.js";
import env from "dotenv";

env.config({ path: "./config/.env" });

const app = express();

connectDB();

app.use(express.static("public"));

// for user requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Routes
app.use("/posts", postsRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Is Running");
});
