import { createContext, useContext, useState } from "react";
import { initialContextState } from "./state";
import { IUser, IUserContext } from "./type";

const UserContext = createContext<{
    state: IUserContext;
    setState: React.Dispatch<React.SetStateAction<IUserContext>>;
}>({ state: initialContextState, setState: () => undefined });

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<IUserContext>({ user: null, error: false, isFetching: false });

    return (
        <UserContext.Provider value={{ state: user, setState: setUser }}>
            {children}
        </UserContext.Provider>
    );
}
