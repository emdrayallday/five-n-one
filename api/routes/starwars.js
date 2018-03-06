const star = require('starwars-names')
const uuid = require('uuid')
const { map } = require('ramda')
module.exports = app => {
  app.get('/starwars', (req, res) =>
    res.send(map(n => ({ id: uuid.v4(), name: n, value: null }), star.all))
  )
}
