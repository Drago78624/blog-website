import { User } from "./Context";
import { Action } from "./Reducer";

export interface IInitialState {
  state: User | null;
  setState: React.Dispatch<Action>;
}
