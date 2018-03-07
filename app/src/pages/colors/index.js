import React from 'react'

import { map } from 'ramda'
import { connect } from 'react-redux'

const li = c => {
  return (
    <li key={c.id} style={{ color: c.value }}>
      {c.name}
    </li>
  )
}

const Colors = props => {
  return (
    <div>
      <h1>Check out these colors!</h1>
      <ul>{map(li, props.colors)}</ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { colors: state.colors }
}
const connector = connect(mapStateToProps)

export default connector(Colors)
