import fetch from 'isomorphic-fetch'
import { SET_BUZZ, CHG_BZ_WRD } from '../constants'
const url = 'http://localhost:5000/buzzwords'
export const setBuzz = async (dispatch, getState) => {
  const words = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZ, payload: words })
}

export const addBuzzword = (word, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(word)
  const result = await fetch(url, { headers, method, body }).then(res =>
    res.json()
  )
  if (result.ok) {
    dispatch(setBuzz)
    history.push('/buzzwords')
  } else {
    console.log('err adding buzzwrd')
  }
}

export const chgBuzzword = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_BZ_WRD, payload: { [field]: value } })
}
