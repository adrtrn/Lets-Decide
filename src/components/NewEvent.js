import React, { Component } from 'react'
import { database } from '../firebase'

class NewEvent extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      name: '',
    }
    this.eventsRef = database.ref('events')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const { group } = this.props
    
    this.eventsRef.push({
      name: this.state.name,
      group: group
    })
    this.setState({ name: '' })
  }

  render () {
    const { name } = this.state
    return (
      <form>
        <input 
          type="text"
          value={name}
          placeholder="Add Event"
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>
          +
        </button>
      </form>
    )
  }
}

export default NewEvent
