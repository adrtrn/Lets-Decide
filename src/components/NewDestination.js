import React, { Component } from 'react'
import { database } from '../firebase'

class NewDestination extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      election: '',
      successMessage: ''
    }
    this.destinationRef = database.ref('/destinations')
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.destinationRef.push({ 
      name: this.state.name, 
      election: this.props.election,
    })
    this.setState({ name: '', election: ''})
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
        <button onClick={this.handleSubmit} disabled={!name}>add</button>
        <p className="success"> { this.state.successMessage } </p>
      </form>
    )
  }
}

export default NewDestination
