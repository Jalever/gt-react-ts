import * as TYPES from "./types";
import * as CONSTANTS from "@/constants/index";

export function updateSession(systemState: TYPES.SystemState): TYPES.SystemActionTypes {
  return {
    type: CONSTANTS.UPDATE_SESSION,
    payload: systemState
  }
}