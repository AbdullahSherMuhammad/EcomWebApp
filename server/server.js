import express from "express";
import BodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import connectdb from "./config/db.js";
import authRoutes from "./routes/authRouter.js";
import cors from "cors";

dotenv.config();
connectdb();

// rest objects
const app = express();
const port = process.env.PORT;

//middleware
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
//rest apis
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World<h1/>");
  console.log("working");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
