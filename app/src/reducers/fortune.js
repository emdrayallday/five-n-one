import { SET_COOKIE, CHG_CURRENT_COOKIE } from '../constants'
import { merge } from 'ramda'
export const fortune = (state = [], action) => {
  switch (action.type) {
    case SET_COOKIE:
      return action.payload
    default:
      return state
  }
}

export const currentCookie = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COOKIE:
      return merge(state, action.payload)
    default:
      return state
  }
}
