const buzz = require('buzzwords')
const uuid = require('uuid')
const { map, append } = require('ramda')

const createWord = w => ({
  id: uuid.v4(),
  name: w,
  value: null
})

var buzzez = map(createWord, buzz)

const getBuzzword = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzez)
  })
}

const addBuzzword = app => {
  app.post('/buzzwords', (req, res) => {
    req.body.id = uuid.v4()
    buzzez = append(req.body, buzzez)
    res.send({ ok: true })
  })
}

module.exports = {
  getBuzzword,
  addBuzzword
}
