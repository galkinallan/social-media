import mongoose from "mongoose";
import PostMessage from "../models/PostMessage.js";

export default {
  getPosts: async (req, res) => {
    try {
      const allPosts = await PostMessage.find();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(404).json({ messag: err.message });
    }
  },

  createPost: async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.status(409).json({ messag: err.message });
    }
  },

  updatePost: async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });

    res.json(updatedPost);
  },
};
