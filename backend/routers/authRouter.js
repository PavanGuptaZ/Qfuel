import express from "express";
import { register, login, refresh, logout } from '../controller/authController.js'

const router = express.Router()

router.post('/login', login)

router.post('/register', register, login)

router.get('/refresh', refresh)

router.post('/logout', logout)

export default router