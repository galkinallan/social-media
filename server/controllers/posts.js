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
};
