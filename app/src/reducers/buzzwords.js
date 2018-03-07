import { SET_BUZZ } from '../constants'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZ:
      return action.payload
    default:
      return state
  }
}
