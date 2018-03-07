const csscolorsObj = require('css-color-names')
const { map, keys, prop, append, isNil } = require('ramda')
const uuid = require('uuid')

// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

var colors = map(createColor, keys(csscolorsObj))
console.log(colors)
const getColors = app => {
  app.get('/colors', (req, res) => {
    res.send(colors)
  })
}

const addColor = app => {
  app.post('/colors', (req, res) => {
    req.body.id = uuid.v4()
    colors = append(req.body, colors)
    res.send({ ok: true })
  })
}

module.exports = { getColors, addColor }
