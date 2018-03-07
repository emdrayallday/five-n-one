import { SET_COOKIE } from '../constants'

export const fortune = (state = [], action) => {
  switch (action.type) {
    case SET_COOKIE:
      return action.payload
    default:
      return state
  }
}
