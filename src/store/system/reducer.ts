import * as CONSTANTS from "@/constants/index";
import * as TYPES from "./types";

const initialState = {
  loggedIn: false,
  session: '',
  username: ''
};

const SystemReducer = (state = initialState, action: TYPES.UpdateSessionAction): TYPES.SystemState => {
  switch (action.type) {
    case CONSTANTS.UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state;
  }
}

export default SystemReducer;