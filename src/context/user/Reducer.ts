import type { User } from "./Context";

export type Action = {
  type: string;
  payload?: any;
};

const Reducer = (state: User, action: Action): User => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isFetching: true }
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
