const cookie = require('fortune-cookie')
const uuid = require('uuid')
const { map, findIndex, append } = require('ramda')
var cookieOjb = map(s => ({ id: uuid.v4(), name: null, value: s }), cookie)

module.exports = app => {
  app.get('/fortune-cookies', (req, res) => {
    res.send(cookieOjb)
  })
  app.post('/fortune-cookies', (req, res) => {
    req.body.id = uuid.v4()
    cookieOjb = append(req.body, cookieOjb)
    res.send({ ok: true })
  })
}
