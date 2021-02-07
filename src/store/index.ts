import { combineReducers, createStore } from "redux";
import ChatReducer from "./chat/reducer";
import SystemReducer from "./system/reducer";

export const rootReducer = combineReducers({
  chat: ChatReducer,
  system: SystemReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;