import fetch from 'isomorphic-fetch'
import { SET_STARS } from '../constants'
const url = 'http://localhost:5000/starwars'

export const setStars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARS, payload: starwars })
}
