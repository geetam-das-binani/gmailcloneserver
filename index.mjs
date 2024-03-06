import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./Database/db.mjs";
import router from "./routes/routes.mjs";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

// ! Routes for handling API requests.

app.use('/api/v1',router)

// ! Db Connection setup
connectDB()
  .then((_) => {
    console.log("Connected To Database");
    app.listen(PORT, () => console.log(`Server is running  ${PORT}`));
  })
  .catch((error) => console.log(error.message));
 