import { UserId, chat,store } from "./src/store/store"

var globalChatId = 0

export interface Room{
    RoomId: string;
    chats: chat[];
    
}

export abstract class inMemoryStore implements store {

    private store : Map<string, Room>

    constructor() {

        this.store = new Map<string, Room>()
    }
    initRoom(RoomId:string) {
        this.store.set(RoomId, {
            RoomId,
            chats: [],
        });
    }    

    getChats(RoomId: string, limit: number, offset: number) {
        const room = this.store.get(RoomId)
        if (!room) {
            return [];
        }
        return room.chats.reverse().slice(0, offset).slice(-1 * limit)
        
    }
    addChat(userId:UserId, name:string, RoomId: string, message:string) {
        const room = this.store.get(RoomId)
        if (!room) {
            return
        }
        room.chats.push({
            chatId:(globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        })
    }

    upVote(RoomId: string, chatId: string) {
        const room = this.store.get(RoomId)
        if (!room) {
            return
        }
        const chat = room.chats.find()
    }
}