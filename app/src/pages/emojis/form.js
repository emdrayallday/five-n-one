import React from 'react'
import { chgEmoji, addEmoji } from '../../action-creators/emojis'
import Form from '../../components/form'
import { connect } from 'react-redux'

const EmojiForm = props => {
  return (
    <div>
      <Form
        cancelUrl="/emojis"
        onChange={props.onChange}
        onSubmit={e => props.onSubmit(props.history, props.currentEmoji)}
        {...props.currentEmoji}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return { currentEmoji: state.currentEmoji }
}
function mapActionsToProps(dispatch) {
  return {
    onChange: (field, value) => {
      dispatch(chgEmoji(field, value))
    },
    onSubmit: (history, emoji) => e => {
      e.preventDefault()
      dispatch(addEmoji(emoji, history))
    }
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(EmojiForm)
