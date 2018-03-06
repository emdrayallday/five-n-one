const buzz = require('buzzwords')
const uuid = require('uuid')
const { map } = require('ramda')

const createWord = w => ({
  id: uuid.v4(),
  name: w
})

const buzzez = map(createWord, buzz)

module.exports = app => {
  app.get('/buzzwords', (req, res) => {
    res.send(buzzez)
  })
}
