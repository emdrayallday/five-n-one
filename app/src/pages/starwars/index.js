import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const li = n => {
  return <li key={n.id}>{n.name}</li>
}

function Star(props) {
  return (
    <div>
      <h1>Names of StarWars Characters!</h1>
      <Link to="/starwars/new">Another? name!</Link>
      <ul>{map(li, props.starwars)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { starwars: state.starwars }
}
const connector = connect(mapStateToProps)
export default connector(Star)
