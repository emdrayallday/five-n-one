import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { setColors } from './action-creators/colors'
import { setBuzz } from './action-creators/buzzwords'
import { setEmojis } from './action-creators/emojis'
import { setCookies } from './action-creators/fortune-cookies'
import { setStars } from './action-creators/starwars'

import 'tachyons'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
store.dispatch(setColors)
store.dispatch(setBuzz)
store.dispatch(setEmojis)
store.dispatch(setCookies)
store.dispatch(setStars)
