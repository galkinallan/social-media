import express from 'express'
import postsController from '../controllers/posts.js'

const router = express.Router();

router.get('/', postsController.getPosts)
router.post('/', postsController.createPost)


export default router;