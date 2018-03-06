const cookie = require('fortune-cookie')
const uuid = require('uuid')
const { map, findIndex } = require('ramda')
const cookieOjb = map(s => ({ id: uuid.v4(), name: s }), cookie)

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(cookieOjb)
  })
}
