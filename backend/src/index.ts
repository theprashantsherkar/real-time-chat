import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";


export const app = express();

dotenv.config({
    path: "./db/config.env",
})

app.use(cors({
    origin: "*",
    credentials: true,
}))

app.use(cookieParser());


// console.log("hello world");
