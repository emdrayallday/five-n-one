import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { emojis } from './reducers/emojis'
import { fortune } from './reducers/fortune'
import { starwars } from './reducers/starwars'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    emojis,
    fortune,
    starwars
  }),
  applyMiddleware(thunk)
)
