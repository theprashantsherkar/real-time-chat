import { UserId, chat,Store } from './Store'

var globalChatId = 0

export interface Room{
    RoomId: string;
    chats: chat[];
    
}

export class inMemoryStore implements Store {

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
            return null;
        }
        const chat = {
            id: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes: []
        }
        room.chats.push(chat)
        return chat;
    }

    upVote(userId: UserId, RoomId: string, chatId: string) {
        const room = this.store.get(RoomId)
        if (!room) {
            return
        }
        const chat = room.chats.find(({ id }) => id === chatId)
        if (chat) {
            chat.upvotes.push(userId)

        }   
        return chat;
    }
}