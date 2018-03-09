import React from 'react'
import { addCookie, chgCookie } from '../../action-creators/fortune-cookies'
import { connect } from 'react-redux'
import Form from '../../components/form'

const CookieForm = props => {
  return (
    <Form
      cancelUrl="/fortune-cookies"
      onChange={props.onChange}
      onSubmit={() => props.onSubmit(props.history, props.currentCookie)}
      {...props.currentCookie}
    />
  )
}
function mapStateToProps(state) {
  return {
    currentCookie: state.currentCookie
  }
}
function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => {
      dispatch(chgCookie(field, value))
    },
    onSubmit: (history, cookie) => e => {
      e.preventDefault()
      dispatch(addCookie(cookie, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(CookieForm)
