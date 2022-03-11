import express from "express";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import database from "./config/database";
import dotenv from "dotenv";
import commandBus from "./config/commandBus";

// Server initialization
const app = express();

// Able to load .env
dotenv.config();

// Connection to mongo
database();

// Able to get JSON by body
app.use(express.json());

app.use("/", (req, res, next) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(`REQUEST to /${fullUrl}`);
  // Checking session
  next();
});

// Starting the web server
app.listen(process.env.API_PORT, () => {
  console.log(`Server is running`);
});
