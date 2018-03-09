import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const li = f => {
  return <li key={f.id}>{f.value}</li>
}

function Emoji(props) {
  return (
    <div>
      <h1>EMOJIS!</h1>
      <Link to="/emojis/new">add an emoji!</Link>
      <ul>{map(li, props.emojis)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { emojis: state.emojis }
}
const connector = connect(mapStateToProps)
export default connector(Emoji)
