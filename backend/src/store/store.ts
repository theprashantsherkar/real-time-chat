export type UserId = string



export interface chat{
    chatId: string
    userId: UserId
    name: string
    message:string
    upvotes: UserId[]  //who has upvoted what    
}


export abstract class store {

    constructor() {

    }
    initRoom(RoomId:string) {

    }

    getChats(room: string, limit: number, offset: number) {
        
    }
    addChat(userId:UserId ,name:string, room: string, message:string) {
        
    }

    upVote(userId:UserId, room:string, chatId:string) {
        
    }
}