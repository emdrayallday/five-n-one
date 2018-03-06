import React from 'react'
import fetch from 'isomorphic-fetch'
import { map } from 'ramda'

const li = f => {
  return <li key={f.id}>{f.value}</li>
}

class Fortune extends React.Component {
  constructor() {
    super()
    this.state = { fortune: [] }
  }
  componentDidMount() {
    fetch('http://localhost:5000/fortune-cookies')
      .then(res => res.json())
      .then(fortune => this.setState({ fortune }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>FORTUNES!</h1>
        <ul>{map(li, this.state.fortune)}</ul>
      </div>
    )
  }
}

export default Fortune
