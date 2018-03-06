import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = word => {
  return <li key={word.id}>{word.value}</li>
}

class Buzz extends React.Component {
  constructor() {
    super()
    this.state = { colors: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/buzzwords')
      .then(res => res.json())
      .then(colors => this.setState({ colors }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Buzz Words!</h1>
        <ul>{map(li, this.state.colors)}</ul>
      </div>
    )
  }
}

export default Buzz
