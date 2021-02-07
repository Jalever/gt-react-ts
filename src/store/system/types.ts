import * as CONSTANTS from "@/constants/index";

export interface SystemState {
  loggedIn: boolean
  session: string
  username: string
}

export interface UpdateSessionAction {
  type: typeof CONSTANTS.UPDATE_SESSION,
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction;
