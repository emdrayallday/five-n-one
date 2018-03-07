import { setStars } from './starwars'
import { SET_STARS } from '../constants'

test('TESTING TO SEE IF WE GET WARS', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_STARS)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setStars(mockDispatch)
})
