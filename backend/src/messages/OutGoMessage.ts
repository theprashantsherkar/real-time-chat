export enum SupportedMessage {
    Addchat = 'AddChat',
    UpdateChat = 'UpdateChat',


}

export type messagePayload = {
    chatId:string,
    roomId: string,
    message: string,
    name: string,
    upvotes: number,
}

export type OutgoingMessage = {
    type: SupportedMessage.Addchat,
    payload: messagePayload
} | {
    type: SupportedMessage.UpdateChat,
    payload: Partial<messagePayload>
}
