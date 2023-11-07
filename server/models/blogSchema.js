import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  imageUrl: String,
  id: {
    type: String,
    default: null,
  },
});

const blog = mongoose.model("blog", blogSchema);
export default blog;
