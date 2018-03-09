import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const li = f => {
  return <li key={f.id}>{f.value}</li>
}

function Fortune(props) {
  return (
    <div>
      <h1>FORTUNES!</h1>
      <Link to="/fortune-cookies/new">NEW COOKIE!</Link>
      <ul>{map(li, props.fortune)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { fortune: state.fortune }
}
const connector = connect(mapStateToProps)
export default connector(Fortune)
