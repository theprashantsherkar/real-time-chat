import { app } from "./index.ts";
import { connectDB } from "./db/database.ts";
import WebSocket, {  WebSocketServer } from "ws";
import { server } from "websocket";


connectDB();

const PORT = process.env.PORT || 8000;
const httpServer = app.listen(PORT, () => console.log('http server running'));

const wss = new WebSocketServer({ server: httpServer });

     

wss.on('connection', (socket) => {
    socket.on("error", err => console.log(err));

    socket.on('message', function message(data, isBinary){
        wss.clients.forEach(function each(client) {
            if (client.readyState == WebSocket.OPEN) {
                client.send(data, { binary: isBinary });

        }
            
        })
        
    })
    
})