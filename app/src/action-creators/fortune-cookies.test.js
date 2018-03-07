import { setCookies } from './fortune-cookies'
import { SET_COOKIE } from '../constants'

test('grabbing and dispatching cookies from api', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COOKIE)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setCookies(mockDispatch)
})
