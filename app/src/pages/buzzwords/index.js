import React from 'react'
import { Link } from 'react-router-dom'
import { map } from 'ramda'
import { connect } from 'react-redux'
const li = word => {
  return <li key={word.id}>{word.name}</li>
}

function Buzz(props) {
  return (
    <div>
      <h1>Buzz Words!</h1>
      <Link to="/buzzwords/new">Add a new buzzword!</Link>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { buzzwords: state.buzzwords }
}
const connector = connect(mapStateToProps)
export default connector(Buzz)
