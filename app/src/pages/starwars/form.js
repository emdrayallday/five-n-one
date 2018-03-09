import React from 'react'
import { addStar, chgStar } from '../../action-creators/starwars'
import Form from '../../components/form'
import { connect } from 'react-redux'

const StarForm = props => {
  return (
    <Form
      cancelUrl="/starwars"
      onChange={props.onChange}
      onSubmit={() => props.onSubmit(props.history, props.currentStar)}
      {...props.currentStar}
    />
  )
}

function mapStateToProps(state) {
  return {
    currentStar: state.currentStar
  }
}

function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => {
      dispatch(chgStar(field, value))
    },
    onSubmit: (history, star) => e => {
      e.preventDefault()
      dispatch(addStar(star, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(StarForm)
