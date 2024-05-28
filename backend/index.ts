import { server as WebSocketServer, connection } from "websocket";
import http from 'http'

const PORT = 8000

var server = http.createServer((req: any, res: any) => {
    console.log((new Date()) + 'recieved request for ' + req.url)
    res.writeHead(404)
    res.end()

})

server.listen(PORT, () => {
    console.log(`${(new Date())}. server is listening on port: ${PORT}`)
})


const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,
    
     
})

const originIsAllowed = (origin:string) => {
    return true;
}

wsServer.on('request', (req) => {
    if (!originIsAllowed(req.origin)) {
        req.reject()
        console.log(`Connection from origin: ${req.origin} is rejected`)
        return
    }

    var connection = req.accept('echo-protocol', req.origin)
    console.log(`${new Date()} Connection accepted`)
    connection.on('message', (message) => {
        if (message.type === "utf8") {
            console.log(`Recieved message: ${message.utf8Data}`)
            connection.sendUTF(message.utf8Data)


        }
        else if (message.type === 'binary') {
            console.log(`Recieved binary message of ${message.binaryData.length} bytes`)
            connection.sendBytes(message.binaryData)
        }
    })
    connection.on('close', (reasonCode, description) => {
        console.log(`${new Date()} Peer: ${connection.remoteAddress} disconnected`)
    })
})

