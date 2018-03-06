import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzz from './pages/buzzwords'
import Star from './pages/starwars'
import Fortune from './pages/fortune-cookies'
import Emoji from './pages/emojis'
const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/colors" component={Colors} />
          <Route path="/buzzwords" component={Buzz} />
          <Route path="/starwars" component={Star} />
          <Route path="/fortune-cookies" component={Fortune} />
          <Route path="/emojis" component={Emoji} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
