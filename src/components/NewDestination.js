import React, { Component } from 'react'
import { database } from '../firebase'

class NewDestination extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      type: '',
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
      type: this.state.type, 
      election: this.props.election,
    })
    this.setState({ name: '', type: '', election: ''})
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
        <input
          type='text'
          value={this.type}
          placeholder='Type of Establishment (required)'
          onChange={(event) => this.setState({ type: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>ADD SUGGESTION</button>
        <p className="success"> { this.state.successMessage } </p>
      </form>
    )
  }
}

export default NewDestination
