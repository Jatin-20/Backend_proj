//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(
    () => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at : ${process.env.PORT}`);
        }) 
        app.on("errorr", (error) => {
            console.log("EEEERRRR: ", error);
            throw error
        })
    }
)
.catch((err) => {
    console.log("MONGODB connection FAILED !!", err);
})























/*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errorr", (error) => {
            console.log("EEEERRRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`,)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/