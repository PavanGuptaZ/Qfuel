import express from "express";
import { likeQuotes, dislikeQuotes } from '../controller/quotesController.js'
import verifyJWT from '../middleware/verifyJWT.js'

const router = express.Router()

router.use(verifyJWT)

router.post('/like', likeQuotes)
router.post('/dislike', dislikeQuotes)

export default router