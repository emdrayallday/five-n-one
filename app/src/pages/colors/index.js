import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = c => {
  return (
    <li key={c.id} style={{ color: c.value }}>
      {c.name}
    </li>
  )
}

class Colors extends React.Component {
  constructor() {
    super()
    this.state = { colors: [], fetchErrorMsg: null }
  }
  componentDidMount() {
    fetch('http://localhost:5000/colors')
      .then(res => res.json())
      .then(results => this.setState({ colors: results }))
      .catch(err =>
        this.setState({ fetchErrorMsg: 'Problem with the colors!' })
      )
  }
  render() {
    return (
      <div>
        <h1>Check out these colors!</h1>
        <ul>{map(li, this.state.colors)}</ul>
      </div>
    )
  }
}

export default Colors
