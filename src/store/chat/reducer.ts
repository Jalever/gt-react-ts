import * as TYPES from "./types";
import * as CONSTANTS from "@/constants/index"

const initialState: TYPES.ChatState = {
  messages: []
};

const ChatReducer = (state = initialState, action: TYPES.ChatActionTypes): TYPES.ChatState => {
  switch (action.type) {
    case CONSTANTS.SEND_MESSAGE: {
      return {
        messages: [...state.messages, action.payload]
      }
    }

    case CONSTANTS.DELETE_MESSAGE: {
      const { payload } = action;
      return {
        messages: state.messages.filter(item => item.timestamp !== payload.timestamp)
      }
    }

    default:
      return state;
  }
}

export default ChatReducer;