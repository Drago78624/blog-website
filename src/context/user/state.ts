import { IUserContext } from "./type";

export const initialContextState: IUserContext = {
    user: null,
    error: false,
    isFetching: false,
};
