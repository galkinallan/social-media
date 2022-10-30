import PostMessage from "../models/PostMessage.js";

export default {
  getPosts: async (req, res) => {
    try {
      const postMessages = await PostMessage.find();

      console.log(postMessages);

      res.status(200).json(postMessages);
    } catch {
      res.status(404).json({ message: error.message });
    }
  },

  createPost: async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
      await newPost.save();

      res.status(201).json(newPost);
    } catch {
      res.status(409).json({ message: error.message });
    }
  },
};
