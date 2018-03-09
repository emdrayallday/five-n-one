import { SET_EMOJIS, CHG_EMOJI } from '../constants'
import { merge } from 'ramda'
export const emojis = (state = [], action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return action.payload
    default:
      return state
  }
}

export const currentEmoji = (state = {}, action) => {
  switch (action.type) {
    case CHG_EMOJI:
      return merge(state, action.payload)
    default:
      return state
  }
}
