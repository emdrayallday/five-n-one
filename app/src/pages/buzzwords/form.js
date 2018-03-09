import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addBuzzword, chgBuzzword } from '../../action-creators/buzzwords'
const BuzzForm = props => {
  return (
    <div>
      <h1>Add a new BUZZWORD!</h1>
      <Form
        cancelUrl="/buzzwords"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentBuzzword)}
        {...props.currentBuzzword}
      />
    </div>
  )
}
function mapStateToProps(state) {
  return {
    currentBuzzword: state.currentBuzzword
  }
}
function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => {
      dispatch(chgBuzzword(field, value))
    },
    onSubmit: (history, word) => e => {
      e.preventDefault()
      dispatch(addBuzzword(word, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(BuzzForm)
