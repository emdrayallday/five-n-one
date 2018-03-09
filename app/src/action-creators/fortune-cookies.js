import fetch from 'isomorphic-fetch'
import { SET_COOKIE, CHG_CURRENT_COOKIE } from '../constants'
const url = 'http://localhost:5000/fortune-cookies'

export const setCookies = async (dispatch, getState) => {
  const cookies = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COOKIE, payload: cookies })
}

export const addCookie = (cookie, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(cookie)
  const result = await fetch(url, { headers, method, body })
  if (result.ok) {
    dispatch(setCookies)
    history.push('/fortune-cookies')
  } else {
    //handle error
  }
}

export const chgCookie = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COOKIE, payload: { [field]: value } })
}
