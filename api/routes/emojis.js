const emojis = require('emojis-list')
const uuid = require('uuid')
const { map, prop, keys } = require('ramda')
const emoji = map(
  pic => ({ id: uuid.v4(), name: pic, value: prop(pic, emojis) }),
  keys(emojis)
)

module.exports = app => {
  app.get('/emojis', (req, res) => {
    res.send(emoji)
  })
}
