import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = f => {
  return <li key={f.id}>{f.value}</li>
}

class Emoji extends React.Component {
  constructor() {
    super()
    this.state = { names: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/emojis')
      .then(res => res.json())
      .then(names => this.setState({ names }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>EMOJIS!</h1>
        <ul>{map(li, this.state.names)}</ul>
      </div>
    )
  }
}

export default Emoji
