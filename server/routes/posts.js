import express from "express";
import postsController from "../controllers/posts.js";

const router = express.Router();

router.get("/", postsController.getPosts);
router.post("/", postsController.createPost);
router.patch("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

export default router;
