import express from 'express';
import { connectDB } from "./db/database";
import WebSocket, {  WebSocketServer } from "ws";

const app = express();

connectDB();

const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

let user = 0;

wss.on('connection', function connection(socket, req) {
    console.log('New client connected:', req.socket.remoteAddress);

    socket.on("error", err => console.log('Socket error:', err));

    console.log(`users connected: ${++user}`);

    socket.on('message', function message(data, isBinary){
        console.log("Received:", data.toString());
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });

    socket.send("hello from the server!!");
});
