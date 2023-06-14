import React, { createContext, useReducer } from "react";
import Reducer, { Action } from "./Reducer";
import { IInitialState } from "./type";

export type User = {
  user: AuthorType | null;
  isFetching: boolean;
  error: boolean;
};

type ContextProviderProp = {
  children: React.ReactNode;
};

const INITIAL_STATE = {
  state: { user: null, isFetching: false, error: false },
  setState: () => undefined,
};

export const Context = createContext<IInitialState>(INITIAL_STATE);

const ContextProvider = ({ children }: ContextProviderProp) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
