const star = require('starwars-names')
const uuid = require('uuid')
const { map, append } = require('ramda')

var names = map(n => ({ id: uuid.v4(), name: n, value: null }), star.all)

module.exports = app => {
  app.get('/starwars', (req, res) => res.send(names))

  app.post('/starwars', (req, res) => {
    console.log(req.body)
    names = append(req.body, names)
    res.send({ ok: true })
  })
}
