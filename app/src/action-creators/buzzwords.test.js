import { setBuzz } from './buzzwords'
import { SET_BUZZ } from '../constants'

test('To retrieve the buzzwords and dispatch from the API', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_BUZZ)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setBuzz(mockDispatch)
})
