import React, { Component } from 'react'
import { database } from '../firebase'

class NewDestination extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      eventID: '',
      successMessage: ''
    }
    this.destinationRef = database.ref('/destinations')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.destinationRef.push({ 
      name: this.state.name, 
      eventID: this.props.eventID,
    })
    this.setState({ name: '', eventID: ''})
    this.setState({ successMessage: 'The Suggestion was Successfully Added'})
  }

  render () {
    const { name, destinationURL } = this.state
    return (
      <form className='Destination-Form'>
        <input
          type='text'
          value={this.name}
          placeholder='Destination (required)'
          onChange={(event) => this.setState({ name: event.target.value, successMessage: '' })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>+</button>
        <p className="success"> { this.state.successMessage } </p>
      </form>
    )
  }
}

export default NewDestination
