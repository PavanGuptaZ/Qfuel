import mongoose from 'mongoose';
import path from 'path';
import connectDb from "./config/dbConnection.js";
import dotenv from 'dotenv';
import { logEvents } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import { __dirname } from './utils/dirname.js'
import express from "express";
const app = express()

import cors from 'cors';
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions.js";
import { logger } from "./middleware/logger.js";


app.use(express.static('public'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(logger)


dotenv.config()
connectDb()


import HomeRouter from './routers/homeRouter.js'
import AuthRouter from './routers/authRouter.js'
import QuotesRouter from './routers/quotesRouter.js'

const PORT = process.env.PORTENV || 3500;

app.use('/', HomeRouter)
app.use('/auth', AuthRouter)
app.use('/quotes', QuotesRouter)

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '..', 'views/404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('text').send('404 Not Found')
    }
})

app.use(errorHandler)


mongoose.connection.once('open', () => {
    console.log("DataBase Connected")

    app.listen(PORT, () => {
        console.log("Server Started on " + PORT)
    })

})

mongoose.connection.on('error', (err) => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})