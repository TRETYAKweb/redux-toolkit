export interface IUser {
    id: number,
    name: string,
    email: string
}

export interface IUserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
}