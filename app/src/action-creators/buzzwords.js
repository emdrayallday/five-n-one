import fetch from 'isomorphic-fetch'
import { SET_BUZZ } from '../constants'
const url = 'http://localhost:5000/buzzwords'
export const setBuzz = async (dispatch, getState) => {
  const words = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZ, payload: words })
}
