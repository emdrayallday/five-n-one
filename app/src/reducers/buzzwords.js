import { SET_BUZZ, CHG_BZ_WRD } from '../constants'
import { merge } from 'ramda'
export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZ:
      return action.payload
    default:
      return state
  }
}

export const currentBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_BZ_WRD:
      return merge(state, action.payload)
    default:
      return state
  }
}
