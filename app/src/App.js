import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import Buzz from './pages/buzzwords'
import Star from './pages/starwars'
import Fortune from './pages/fortune-cookies'
import Emoji from './pages/emojis'
import ColorForm from './pages/colors/form'
import BuzzForm from './pages/buzzwords/form'
import EmojiForm from './pages/emojis/form'
import StarForm from './pages/starwars/form'
import CookieForm from './pages/fortune-cookies/form'
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
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/buzzwords" component={Buzz} />
          <Route path="/buzzwords/new" component={BuzzForm} />
          <Route exact path="/starwars" component={Star} />
          <Route path="/starwars/new" component={StarForm} />
          <Route exact path="/fortune-cookies" component={Fortune} />
          <Route path="/fortune-cookies/new" component={CookieForm} />
          <Route exact path="/emojis" component={Emoji} />
          <Route path="/emojis/new" component={EmojiForm} />
          <Route path="/colors/new" component={ColorForm} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
