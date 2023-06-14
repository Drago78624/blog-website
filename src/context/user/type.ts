// User state
export interface IUser {
    fname: string;
    lname: string;
    photo: string;
}
// Context type
export interface IUserContext {
    user: IUser | null;
    error: boolean;
    isFetching: boolean;
}
