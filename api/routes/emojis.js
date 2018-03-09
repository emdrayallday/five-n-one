const emojis = require('emojis-list')
const uuid = require('uuid')

const { map, prop, keys, append } = require('ramda')

const createEmoji = pic => ({
  id: uuid.v4(),
  name: null,
  value: pic
})

var emoji = map(createEmoji, emojis)

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emoji)
  })
  app.post('/emojis', (req, res) => {
    req.body.id = uuid.v4()
    emoji = append(req.body, emoji)
    res.send({ ok: true })
  })
}
