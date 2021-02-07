import * as TYPES from "./types"
import * as CONSTANTS from "@/constants/index"

export function DeleteMessage(timestamp: number): TYPES.ChatActionTypes {
  return {
    type: CONSTANTS.DELETE_MESSAGE,
    payload: {
      timestamp
    }
  }
}

export function SendMessage(msg: TYPES.Message): TYPES.ChatActionTypes {
  return {
    type: CONSTANTS.SEND_MESSAGE,
    payload: msg
  }
}