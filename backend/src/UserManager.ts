import { connection } from "websocket"

interface User{
    name: string,
    id: string,
    conn: connection,
    
}


interface Room{
    users: User[]
    
}

export class UserManager{
    private rooms: Map<string, Room>
    
    constructor() {
        this.rooms = new Map<string, Room>()
        
    }

    addUser(name:string, userId:string, roomId:string, socket:connection) {
        if (!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users:[]
            })
        }

        this.rooms.get(roomId)?.users.push({
            id: userId,
            name,
            conn: socket,
            
        })
    }

    removeUser(userId: string, roomId: string) {
        const users = this.rooms.get(roomId)?.users
            
        if (users) {
            users.filter(({ id }) => id != userId)
        }
            
        
    }

    getUser(roomId: string, userId: string):User| null {
        const user = this.rooms.get(roomId)?.users.find(({ id }) => id == userId)
        return user ?? null;

        
    }

    broadcast(roomId:string, message:) {
        
    }


 

}