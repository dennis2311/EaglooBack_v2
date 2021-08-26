export interface User {
    id: string;
    email: string;
    nickName?: string;
    realName?: string;
}

export interface MinimalUser {
    id: string;
    email: string;
    nickName?: string;
}

export interface ConnectedUser {
    socketId: string;
    userInfo: MinimalUser;
    roomId?: string;
    seatNo?: number;
}
