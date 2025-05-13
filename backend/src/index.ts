import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import colors from 'colors';
import AuthRoutes from './routes/Auth'
import bodyParser from "body-parser";


export const app = express();

dotenv.config({
    path: "./db/config.env",
})

app.use(cors({
    origin: "*",
    credentials: true,
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());


app.use('/', (req, res)=>{
    res.send("Hello world")
})
app.use('/api/v1', AuthRoutes);
// console.log("hello world");
