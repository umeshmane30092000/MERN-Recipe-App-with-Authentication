import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

// mongodb://127.0.0.1:27017/recipeapp

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://umeshmane20:Mane%403009@cluster0.ercg4oc.mongodb.net/recipeapp?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(3002, () => console.log("Server started"));
