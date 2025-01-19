import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

export const app = express();

dotenv.config({
    path: "./db/config.env"
})

app.use(cookieParser());
