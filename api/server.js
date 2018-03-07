const express = require('express')
const cors = require('cors')
const { addColor, getColors } = require('./routes/colors')
const buzzRoutes = require('./routes/buzzwords')
const emojiRoute = require('./routes/emojis')
const cookieRoute = require('./routes/fortune-cookies')
const starRoute = require('./routes/starwars')
const bodyParser = require('body-parser')

const app = express()

app.use(cors({ credentials: true }))
app.use(bodyParser.json())
// load routes here

app.get('/', (req, res) => res.send('home route'))
starRoute(app)
emojiRoute(app)
cookieRoute(app)
buzzRoutes(app)
addColor(app)
getColors(app)
app.listen(5000)
console.log('Server listening at 5000')
