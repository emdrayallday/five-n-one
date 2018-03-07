import { setEmojis } from './emojis'
import { SET_EMOJIS } from '../constants'

test('Getting the emojis from API and dispatching', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_EMOJIS)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setEmojis(mockDispatch)
})
