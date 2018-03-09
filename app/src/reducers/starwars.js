import { SET_STARS, CHG_CURRENT_STAR } from '../constants'
import { merge } from 'ramda'
export const starwars = (state = [], action) => {
  switch (action.type) {
    case SET_STARS:
      return action.payload
    default:
      return state
  }
}

export const currentStar = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_STAR:
      return merge(state, action.payload)
    default:
      return state
  }
}
