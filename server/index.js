import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { productRouter } from "./Routers/productRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRouter);
const port = 4000;

const PASSWORD = process.env.PASSWORD;
const URL = process.env.URL.replace("<password>", PASSWORD);
const PORT = 4000;

mongoose.connect(URL).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
