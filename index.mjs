import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./Database/db.mjs";
import router from "./routes/routes.mjs";
import path from 'path'

const __dirname=path.resolve()
const PORT = process.env.PORT || 5000;

const app = express();

// ! Db Connection setup
connectDB()
.then((_) => {
  console.log("Connected To Database");
  app.listen(PORT, () => console.log(`Server is running  ${PORT}`));
})
.catch((error) => console.log(error.message));


app.use(
  cors({
    origin: true,
  })
  );
  app.use(express.json());
  // ! Routes for handling API requests.
app.use('/api/v1',router)

 app.use(express.static(path.join(__dirname, "./client", "dist")));

 app.get("*", (_, res) => {
   res.sendFile(path.join(__dirname, "./client", "dist", "index.html"),(err)=>{
    res.status(500).send(err)
   });
 })