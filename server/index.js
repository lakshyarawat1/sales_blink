import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import mongoose from "mongoose";
import cors from "cors";
import user from "./models/userSchema.js";
import blog from "./models/blogSchema.js";
dotenv.config();

const log = console.log;

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    log(chalk.blue("Connected to mongdb"));
  })
  .catch((err) => {
    log(chalk.red("MongoDb not connected"), err);
  });

app.use(cors());
app.use(express.json());

app.post("/update/user", (req, res) => {
  const { userName, email } = req.body;

  try {
    try {
      user.findOne({ userName }).then((user) => {
        return res.status(401).json({ message: user });
      });
    } catch (err) {
      throw err;
    }
    const temp = { userName, email };
    const newUser = new user(temp);
    newUser.save();
    console.log(newUser, temp);
    res.status(200).json({ message: newUser });
  } catch (err) {
    throw err;
  }
});

app.post("/createABlog", async (req, res) => {
  // code here for creating a blog post

  const newBlog = blog.create({
    title: req.body.title,
    desc: req.body.desc,
    imageUrl: req.body.imageUrl,
  });
  try {
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    res.status(501).json({ error: err });
  }
});

app.listen(process.env.PORT, () => {
  log(chalk.green("Server listening to port ", process.env.PORT));
});
