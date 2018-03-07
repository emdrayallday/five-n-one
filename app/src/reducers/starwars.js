import { SET_STARS } from '../constants'

export const starwars = (state = [], action) => {
  switch (action.type) {
    case SET_STARS:
      return action.payload
    default:
      return state
  }
}
