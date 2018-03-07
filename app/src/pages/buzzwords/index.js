import React from 'react'

import { map } from 'ramda'
import { connect } from 'react-redux'
const li = word => {
  return <li key={word.id}>{word.value}</li>
}

function Buzz(props) {
  console.log(props)
  return (
    <div>
      <h1>Buzz Words!</h1>
      <ul>{map(li, props.buzzwords)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { buzzwords: state.buzzwords }
}
const connector = connect(mapStateToProps)
export default connector(Buzz)
