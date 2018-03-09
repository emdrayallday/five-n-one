import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { emojis, currentEmoji } from './reducers/emojis'
import { fortune, currentCookie } from './reducers/fortune'
import { starwars, currentStar } from './reducers/starwars'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    emojis,
    currentEmoji,
    fortune,
    currentCookie,
    starwars,
    currentStar
  }),
  applyMiddleware(thunk)
)
