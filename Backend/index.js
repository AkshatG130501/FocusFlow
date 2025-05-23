import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./db/connectToMongoDB.js";
import creatorRoutes from "./routes/creatorRoutes.routes.js";
import studentRoutes from "./routes/studentRoutes.routes.js";
import authRoutes from "./routes/authRoutes.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://focus-flow-lilac.vercel.app",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/creator", creatorRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  connectToMongoDB();
  console.log("Server is running on port 3000");
});
