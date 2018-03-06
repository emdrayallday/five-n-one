import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = n => {
  return <li key={n.id}>{n.name}</li>
}

class Buzz extends React.Component {
  constructor() {
    super()
    this.state = { names: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/starwars')
      .then(res => res.json())
      .then(names => this.setState({ names }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Names of StarWars Characters!</h1>
        <ul>{map(li, this.state.names)}</ul>
      </div>
    )
  }
}

export default Buzz
