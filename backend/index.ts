import { Message, server as WebSocketServer, connection } from "websocket";
import http from 'http'
import { UserManager } from "./src/UserManager";
import { IncomingMessage, SupportedMessage } from "./src/messages/IncomingMessages";
import { inMemoryStore } from "./src/store/inMemoryStore";
import { Store } from "./src/store/Store";
import { OutgoingMessage, SupportedMessage as OutgoingSupportedMessage } from "./src/messages/OutGoMessage";

const PORT = 8000

const server = http.createServer((req: any, res: any) => {
    console.log((new Date()) + 'recieved request for ' + req.url)
    res.writeHead(404)
    res.end()

})

const userManager = new UserManager()
const store = new inMemoryStore()


server.listen(PORT, () => {
    console.log(`${(new Date())}. server is listening on port: ${PORT}`)
})


const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false,


})

const originIsAllowed = (origin: string) => {
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
        //to do: add rate limiting logic here
        if (message.type === "utf8") {

            try {
                messageHandler(connection, JSON.parse(message.utf8Data))

            }
            catch (err) {
                console.log(err)
            }
            // console.log(`Recieved message: ${message.utf8Data}`)
            // connection.sendUTF(message.utf8Data)

        }

    })
    connection.on('close', (reasonCode, description) => {
        console.log(`${new Date()} Peer: ${connection.remoteAddress} disconnected`)
    })
})


function messageHandler(ws: connection, message: IncomingMessage) {
    if (message.type == SupportedMessage.JoinRoom) {
        const payload = message.payload
        userManager.addUser(payload.name, payload.userId, payload.userId, ws)
    }

    if (message.type == SupportedMessage.SendMessage) {
        const payload = message.payload
        const user = userManager.getUser(payload.roomId, payload.userId)
        if (!user) {
            console.error('User not found in Database')
            return
        }
        let chat = store.addChat(payload.userId, user.name, payload.roomId, payload.message)
        if (!chat) {
            return;
        }
        //ToDo : add broadcast login here
        const OutgoingPayload = {
            type: OutgoingSupportedMessage.Addchat,
            payload: {
                chatId: chat.id,
                roomId: payload.roomId,
                message: payload.message,
                name: user.name,
                upvotes: 0,
            }

        }
        userManager.broadcast(payload.roomId, payload.userId, OutgoingPayload)
    }

    if (message.type == SupportedMessage.UpvoteMessage) {
        const payload = message.payload;
        const chat = store.upVote(payload.userId, payload.userId, payload.chatId)
        if (!chat) {
            return;
        }
        
        //ToDo : add broadcast login here
        const OutgoingPayload:OutgoingMessage = {
            type: OutgoingSupportedMessage.UpdateChat,
            payload: {
                chatId:payload.chatId,
                roomId: payload.roomId,
                upvotes: chat.upvotes.length,
            }

        }
        userManager.broadcast(payload.roomId, payload.userId, OutgoingPayload)
    }

}

