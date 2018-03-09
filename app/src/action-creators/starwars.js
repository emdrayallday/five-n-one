import fetch from 'isomorphic-fetch'
import { SET_STARS, CHG_CURRENT_STAR } from '../constants'
const url = 'http://localhost:5000/starwars'

export const setStars = async (dispatch, getState) => {
  const starwars = await fetch(url).then(res => res.json())
  dispatch({ type: SET_STARS, payload: starwars })
}

export const addStar = (star, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(star)
  const result = await fetch(url, { headers, method, body })
  if (result.ok) {
    dispatch(setStars)
    history.push('/starwars')
  } else {
    //handle result
  }
}

export const chgStar = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_STAR, payload: { [field]: value } })
}
