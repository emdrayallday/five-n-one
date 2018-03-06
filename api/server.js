const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const buzzRoutes = require('./routes/buzzwords')
const emojiRoute = require('./routes/emojis')
const cookieRoute = require('./routes/fortune-cookies')
const starRoute = require('./routes/starwars')

const app = express()

app.use(cors({ credentials: true }))

// load routes here

app.get('/', (req, res) => res.send('home route'))
starRoute(app)
emojiRoute(app)
cookieRoute(app)
buzzRoutes(app)
colorRoutes(app)
app.listen(5000)
console.log('Server listening at 5000')
