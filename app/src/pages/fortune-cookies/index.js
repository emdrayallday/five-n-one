import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
const li = f => {
  return <li key={f.id}>{f.value}</li>
}

function Fortune(props) {
  return (
    <div>
      <h1>FORTUNES!</h1>
      <ul>{map(li, props.fortune)}</ul>
    </div>
  )
}
function mapStateToProps(state) {
  return { fortune: state.fortune }
}
const connector = connect(mapStateToProps)
export default connector(Fortune)
