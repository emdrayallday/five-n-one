import { setColors } from './colors'
import { SET_COLORS } from '../constants'

test('get and dispatch colors from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COLORS)
    expect(action.payload.length).toBeGreatherThan(0)
  }
  setColors(mockDispatch)
})
