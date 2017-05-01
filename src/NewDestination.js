import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { database } from './firebase'
import './css/NewDestination.css'

class NewDestination extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      type: '',
      destinationURL: '',
      creator: '',
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
      destinationURL: this.state.destinationURL, 
      creator: this.props.user.displayName 
    })
    this.setState({ name: '', type: '', destinationURL: ''})
    this.setState({ successMessage: 'The Suggestion was Successfully Added'})
  }

  render () {
    const { name, destinationURL } = this.state
    return (
      <form className='Destination-Form'>
        <input
          type='text'
          value={this.name}
          placeholder='Destination'
          onChange={(event) => this.setState({ name: event.target.value, successMessage: '' })}
        />
        <input
          type='text'
          value={this.type}
          placeholder='Type of Establishment'
          onChange={(event) => this.setState({ type: event.target.value })}
        />
        <input
          type='text'
          value={this.destinationURL}
          placeholder='Destination URL (optional)'
          onChange={(event) => this.setState({ destinationURL: event.target.value })}
        />
        <button onClick={this.handleSubmit} disabled={!name}>ADD SUGGESTION</button>
        <p> { this.state.successMessage } </p>
      </form>
    )
  }
}

NewDestination.propTypes = {
  user: PropTypes.object,
  destinationRef: PropTypes.object
}

export default NewDestination
